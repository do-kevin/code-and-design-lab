# BANNER-PERF-IMPROVEMENT-NOTES

## Observations

A combination of setting a predefined width and height that's mobile-first and using a library such as `lozad.js` seems to add a bump in performance and increase likelihood of reduced Cumulative Shift Layout.

The min-height we should determine will have to come from assets given by the creative team and observe what the smallest dimensions that actually show up in the website under a small screen size.

If we're still showing the gif-like slider banner's desktop "mode" on tablet, then the tablet screen size should provide us the minimum height we should use to reduce CLS.

And our placeholder image should be around or under 10kb. We can use https://squoosh.app to achieve this.
