import React from 'react'

export default function Banner(props) {
  const { hideBanner } = props;
  const windowSize = window.innerWidth;

  return (
    <>
    { 
      windowSize > 600 ?
        <div class="relative h-20 isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
        <svg viewBox="0 0 577 310" aria-hidden="true" class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
          <path id="1d77c128-3ec1-4660-a7f6-26c7006705ad" fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)" fill-opacity=".3" d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z" />
          <defs>
            <linearGradient id="49a52b64-16c6-4eb9-931b-8e24bf34e053" x1="614.778" x2="-42.453" y1="26.617" y2="96.115" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
        <svg viewBox="0 0 577 310" aria-hidden="true" class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
          <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
        </svg>
        <div class="flex flex-wrap items-center gap-y-0 gap-x-4 p-0">
          <p class="text-m leading-5 text-gray-900 mb-0">
            <strong class="font-semibold">Turn of the Season Clothing Launch!</strong><br/>Join us on the First of the month to see what’s coming next.
          </p>
        </div>
        <div class="flex flex-1 justify-end">
          <button onClick={hideBanner}  type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span class="sr-only">Dismiss</span>
            <svg class="h-8 w-8 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
    :
      <div class="relative h-13 isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
      <svg viewBox="0 0 577 310" aria-hidden="true" class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
        <path id="1d77c128-3ec1-4660-a7f6-26c7006705ad" fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)" fill-opacity=".3" d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z" />
        <defs>
          <linearGradient id="49a52b64-16c6-4eb9-931b-8e24bf34e053" x1="614.778" x2="-42.453" y1="26.617" y2="96.115" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 577 310" aria-hidden="true" class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
        <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
      </svg>
      <div class="flex flex-wrap items-center gap-y-0 gap-x-4 ml-3">
        <p class="text-m leading-5 text-gray-900 mb-0">
          <strong class="font-semibold">Turn of the Season Clothing Launch!</strong><br/>Join us on the First of the month to see what’s coming next.
        </p>
      </div>
      <div class="flex flex-1 justify-end">
        <button onClick={hideBanner}  type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span class="sr-only">Dismiss</span>
          <svg class="h-7 w-7 text-gray-900" viewBox="0 0 10 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
    }
    </>
  )
}


