# Dopamine 3.0.6

Hello everyone!

I'm happy to bring you **Dopamine 3.0.6**, a stability-focused update that squashes a good number of bugs reported by the community. No flashy new features this time, just a cleaner, more reliable experience all around.

A notable fix in this release addresses an issue where **manually edited album covers were being overwritten** on the next collection refresh, which was understandably frustrating. GNU/Linux users will also be glad to hear that the **AppImage package now works correctly on modern distributions** again. On top of that, several issues related to **ReplayGain**, **smart playlists**, and **tag editing** have been resolved, making library management more dependable.

Here's the change log:

### Fixed

- Manually edited album covers are overwritten on the next collection refresh
- Fixed AppImage package not working on modern GNU/Linux distributions
- Deleting song from playlist sometimes fails
- Playback controls only work when clicking on upper half of the buttons
- It's unclear that files must be tagged with an external ReplayGain scanner (for example rsgain) before normalization can take effect
- Change to Artist or Album tags is not reflected in the song list view nor in the Now Playing information
- ReplayGain issues
- Smart playlist filters ignore text containing accents or other special characters
- Some MP3 files trigger an "MPEG header not found" error due to a too-narrow initial MPEG header scan range

### Changed

- Updated the Vietnamese translation

Download [here](https://github.com/digimezzo/dopamine/releases/tag/v3.0.6).

P.S.: If you enjoy Dopamine, please consider donating via [PayPal](https://www.paypal.com/donate/?hosted_button_id=N9Z4D62P24KRU) or buying me a [coffee](https://ko-fi.com/S6S11K63U). Your support keeps the music going!