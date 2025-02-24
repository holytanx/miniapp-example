'use client'

export default function BackButton() {
  return (
    <button
      onClick={() => console.log("Click")}
      className="rounded-full bg-white hover:bg-gray-300"
      aria-label="Go back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  )
}