# Dopamine 3.0.1

Hi all!

I'm thrilled to announce Dopamine 3.0.1, a maintenance and feature update designed to make your music experience even better. This release brings finer control over ratings, more sorting options, improved album views, and crucial bug fixes to keep your library running smoothly.

Below, you’ll find the full changelog detailing what’s new, improved, and fixed in this release.

### Added

- Added half-star rating support, expanding the song rating scale to a range of 0–10.
- Added song sorting options on the 'Folders' screen
- Added a button to toggle between the default expanded album view and Dopamine 2's compact album view
- Added the removable-media plug to the Snap configuration, allowing the Snap version of Dopamine to access /media.

### Changed

- Updated the Kurdish translation
- Updated the Russian translation
- Updated the Spanish translation
- Updated the Swedish translation
- Updated the Vietnamese translation

### Fixed

- m3u8 playlists are not recognized
- Ratings are not read from files
- Developer console opens when pressing F12
- Crash when trying to play a deleted file
- Song length in right sidebar displays double the time of the real length
- Some issues with fetching of lyrics
- Folders context menu opens too much the left on the Folders screen
- Crash when the user has no Music directory
- Crash when trying to play ALAC M4A file. Those are not supported. Instead of a crash, the user is now informed why the file doesn't play.
- Crash when starting files from the operating system's file browser
- Issue where the Edit song dialog replaces '/' by ';' for artists containing a '/' in their name
- Linux Snap issue that caused file dialog text to appear as squares instead of readable characters

Enjoy the music!

Download [here](https://github.com/digimezzo/dopamine/releases/tag/v3.0.1).

P.S.: if you enjoy Dopamine, please consider donating with [PayPal](https://www.paypal.com/donate/?hosted_button_id=N9Z4D62P24KRU) or buying me a [coffee](https://ko-fi.com/S6S11K63U). Thank you so much!
