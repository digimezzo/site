# Dopamine 3.0.12

Hello everyone!

I am happy to share **Dopamine 3.0.12**, an update with more ways to personalize your music experience, improvements to translations and lyrics, and fixes for several long-standing issues.

You can now resize album covers, choose your audio output device, configure which artist name prefixes to skip, and create your own translations. This release also adds WebP cover support, synced lyrics for Windhawk's Desktop Audio Visualizer Plus, and Flatpak installation via FlatPark.

Here is the full change log:

### Added

- Slider to resize album covers in the list of albums
- Support for WebP album covers
- Synced lyrics support for Windhawk's Desktop Audio Visualizer Plus
- Support for the Turkish alphabet in the list of artists
- Audio device output settings
- Configurable skipping of prefixes in the artists screen
- Ability to create and use your own translations
- Flatpak installation via FlatPark (Thank you @jing2uo)

### Changed

- Updated the German translation (Thank you @mgfirewater)
- Updated the Portuguese (Brazil) translation (Thank you @henrique-coder)
- Updated the Turkish translation (Thank you @mertssmnoglu)

### Fixed

- Wave progress bar glitches
- Album cover shown even though a file does not have any
- Artists tab doesn't filter the albums when artist splitting is disabled
- Metadata (Album, Year, Cover) is sometimes not displayed in the showcase view
- Last.fm "Now Playing" expires prematurely (Thank you @jonson-zero)
- Memory leak in the audio player, causing glitches that worsen over long playback sessions (Thank you @ThatOnePersonCalledAnon)
- Accented lyrics lookups (Thank you @dbqp01)
- Star ratings of loved songs are not backed up or restored correctly
- Memory leak on Linux causing a rogue Dopamine process to remain alive even after closing
- Drop shadows on now playing pictures have banding and look ugly

Download [here](https://github.com/digimezzo/dopamine/releases/tag/v3.0.12).

P.S.: If you enjoy Dopamine, please consider donating via [PayPal](https://www.paypal.com/donate/?hosted_button_id=N9Z4D62P24KRU) or buying me a [coffee](https://ko-fi.com/S6S11K63U). Your support keeps the music going!
