"use client";

import { SvgIcon, SvgIconProps } from "@mui/material";

export default function GitHubIcon({
  viewBox = "0 0 24 24",
  ...props
}: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox={viewBox}>
      <path
        d="M22.2857 12.0001C22.2857 14.2411 21.6316 16.2568 20.3236 18.0469C19.0156 19.8371 17.3258 21.076 15.2544 21.7635C15.0133 21.8081 14.837 21.7769 14.7254 21.6697C14.6138 21.5626 14.558 21.4286 14.558 21.2679V18.442C14.558 17.576 14.3258 16.942 13.8616 16.5402C14.3705 16.4867 14.8281 16.4063 15.2343 16.2992C15.6406 16.192 16.0602 16.0179 16.4933 15.7769C16.9263 15.5358 17.2879 15.2389 17.5781 14.8862C17.8683 14.5336 18.1049 14.0648 18.2879 13.48C18.4709 12.8952 18.5624 12.2233 18.5624 11.4644C18.5624 10.384 18.2098 9.46436 17.5044 8.70543C17.8348 7.89293 17.7991 6.98221 17.3973 5.97328C17.1473 5.89293 16.7857 5.94203 16.3124 6.12061C15.8392 6.29918 15.4285 6.49561 15.0803 6.70989L14.5714 7.03132C13.741 6.79918 12.8839 6.68311 11.9999 6.68311C11.116 6.68311 10.2589 6.79918 9.42852 7.03132C9.28566 6.93311 9.09593 6.81257 8.85932 6.66971C8.62272 6.52686 8.24995 6.35498 7.74102 6.15409C7.23209 5.95319 6.84816 5.89293 6.58923 5.97328C6.19638 6.98221 6.16513 7.89293 6.49548 8.70543C5.79013 9.46436 5.43745 10.384 5.43745 11.4644C5.43745 12.2233 5.52897 12.8929 5.712 13.4733C5.89504 14.0536 6.12941 14.5224 6.41513 14.8795C6.70084 15.2367 7.06022 15.5358 7.49325 15.7769C7.92629 16.0179 8.34593 16.192 8.75218 16.2992C9.15843 16.4063 9.61602 16.4867 10.1249 16.5402C9.7678 16.8617 9.54905 17.3215 9.4687 17.9197C9.2812 18.009 9.0803 18.076 8.86602 18.1206C8.65173 18.1652 8.39727 18.1876 8.10263 18.1876C7.80798 18.1876 7.51557 18.0916 7.22539 17.8996C6.93522 17.7077 6.68745 17.4286 6.48209 17.0626C6.31245 16.7769 6.09593 16.5447 5.83254 16.3661C5.56914 16.1876 5.34816 16.0804 5.16959 16.0447L4.90173 16.0045C4.71423 16.0045 4.58477 16.0246 4.51334 16.0648C4.44191 16.105 4.41959 16.1563 4.44638 16.2188C4.47316 16.2813 4.51334 16.3438 4.56691 16.4063C4.62048 16.4688 4.67852 16.5224 4.74102 16.567L4.83477 16.634C5.0312 16.7233 5.22539 16.8929 5.41736 17.1429C5.60932 17.3929 5.74995 17.6206 5.83923 17.826L5.97316 18.134C6.08923 18.4733 6.28566 18.7478 6.56245 18.9577C6.83923 19.1675 7.13834 19.3014 7.45977 19.3594C7.7812 19.4175 8.09147 19.4487 8.39057 19.4532C8.68968 19.4577 8.93745 19.442 9.13388 19.4063L9.44191 19.3527C9.44191 19.692 9.44414 20.0894 9.44861 20.5447C9.45307 21.0001 9.4553 21.2411 9.4553 21.2679C9.4553 21.4286 9.39727 21.5626 9.2812 21.6697C9.16513 21.7769 8.98655 21.8081 8.74548 21.7635C6.67405 21.076 4.98432 19.8371 3.67629 18.0469C2.36825 16.2568 1.71423 14.2411 1.71423 12.0001C1.71423 10.134 2.17405 8.41302 3.0937 6.83712C4.01334 5.26123 5.26111 4.01346 6.837 3.09382C8.41289 2.17418 10.1339 1.71436 11.9999 1.71436C13.866 1.71436 15.587 2.17418 17.1629 3.09382C18.7388 4.01346 19.9866 5.26123 20.9062 6.83712C21.8258 8.41302 22.2857 10.134 22.2857 12.0001Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
