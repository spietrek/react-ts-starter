interface Props {
  error: string
}

const LoginError = ({ error }: Props) => {
  return (
    <>
      {error !== '' && (
        <div className="tw-alert tw-alert-error tw-mb-4 tw-shadow-md">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-h-6 tw-w-6 tw-flex-shrink-0 tw-stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginError
