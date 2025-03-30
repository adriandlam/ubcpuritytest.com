"use client";

import { useEffect, useRef } from "react";
import { RedditIcon } from "react-share";

type ShareDropdownProps = {
	score: number;
	getScoreMessage: () => string;
	showShareOptions: boolean;
	setShowShareOptions: (show: boolean) => void;
};

export default function ShareDropdown({
	score,
	getScoreMessage,
	showShareOptions,
	setShowShareOptions,
}: ShareDropdownProps) {
	const shareMenuRef = useRef<HTMLDivElement>(null);
	const isWebShareSupported =
		typeof navigator !== "undefined" && !!navigator.share;

	const handleShare = (platform: string) => {
		const shareText = `I scored ${score}/100 on the UBC Purity Test! ${getScoreMessage()} Try it yourself!`;
		const shareUrl = window.location.href;

		switch (platform) {
			case "reddit":
				window.open(
					`https://www.reddit.com/submit?url=${encodeURIComponent(
						shareUrl,
					)}&title=${encodeURIComponent(shareText)}&type=LINK`,
					"_blank",
				);
				break;
			case "native":
				if (navigator.share) {
					navigator
						.share({
							title: "UBC Purity Test Results",
							text: shareText,
							url: shareUrl,
						})
						.then(() => console.log("Shared successfully"))
						.catch((error) => console.error("Error sharing:", error));
				} else {
					copyToClipboard(`${shareText} ${shareUrl}`);
				}
				break;
			case "text":
				// For text message sharing on mobile
				if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
					window.open(
						`sms:?body=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
					);
				} else {
					copyToClipboard(`${shareText} ${shareUrl}`);
				}
				break;
			default:
				copyToClipboard(`${shareText} ${shareUrl}`);
		}

		setShowShareOptions(false);
	};

	// Function to copy text to clipboard with fallback
	const copyToClipboard = (text: string) => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				// For secure contexts
				navigator.clipboard
					.writeText(text)
					.then(() => {
						alert("Copied to clipboard!");
					})
					.catch((err) => {
						console.error("Could not copy text: ", err);
						fallbackCopyToClipboard(text);
					});
			} else {
				// Fallback for non-secure contexts
				fallbackCopyToClipboard(text);
			}
		} catch (err) {
			console.error("Copy failed: ", err);
			alert("Failed to copy. Please try again or copy manually.");
		}
	};

	// Fallback method using document.execCommand
	const fallbackCopyToClipboard = (text: string) => {
		try {
			const textArea = document.createElement("textarea");
			textArea.value = text;

			// Make the textarea out of viewport
			textArea.style.position = "fixed";
			textArea.style.left = "-999999px";
			textArea.style.top = "-999999px";
			document.body.appendChild(textArea);

			// Select and copy
			textArea.focus();
			textArea.select();
			const successful = document.execCommand("copy");

			// Clean up
			document.body.removeChild(textArea);

			if (successful) {
				alert("Copied to clipboard!");
			} else {
				alert("Failed to copy. Please try again or copy manually.");
			}
		} catch (err) {
			console.error("Fallback copy failed: ", err);
			alert("Failed to copy. Please try again or copy manually.");
		}
	};

	// Close share menu when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				shareMenuRef.current &&
				!shareMenuRef.current.contains(event.target as Node)
			) {
				setShowShareOptions(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [setShowShareOptions]);

	if (!showShareOptions) return null;

	return (
		<div
			ref={shareMenuRef}
			className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200 share-dropdown"
		>
			<div className="py-1">
				{isWebShareSupported && (
					<button
						onClick={() => handleShare("native")}
						className="w-full flex items-center px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100"
						data-umami-event="Share Result"
						data-umami-event-type="navigator"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2"
						>
							<circle cx="18" cy="5" r="3"></circle>
							<circle cx="6" cy="12" r="3"></circle>
							<circle cx="18" cy="19" r="3"></circle>
							<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
							<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
						</svg>
						<span>Share</span>
					</button>
				)}

				<div
					onClick={() => handleShare("reddit")}
					className="w-full flex items-center px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100"
					data-umami-event="Share Result"
					data-umami-event-type="reddit"
				>
					<RedditIcon size={16} className="mr-2" />
					<span>Share on Reddit</span>
				</div>

				<button
					className="w-full flex items-center px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100"
					data-umami-event="Share Result"
					data-umami-event-type="copy"
					onClick={() =>
						copyToClipboard(
							`I scored ${score}/100 on the UBC Purity Test! ${getScoreMessage()} Try it yourself! ${
								window.location.href
							}`,
						)
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="mr-2"
					>
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
						<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
					</svg>
					<span>Copy to clipboard</span>
				</button>
			</div>
		</div>
	);
}
