# Dopamine 3.0.9

Hello everyone!

I am happy to share **Dopamine 3.0.9**, an update that adds more convenient library controls and customization options, while fixing several issues affecting startup, sorting, grouping, and lyrics.

This release introduces a new **equalizer**, a **clear selection button** across several library screens, and an option to show a **more compact total duration** in songs lists. It also includes an updated Portuguese (Brazil) translation and important fixes for Snap startup, accented artist grouping, multi-disc album sorting, large playlist sorting, and lyrics with newline characters.

Here is the full change log:

### Added

- Added an equalizer
- Added a clear selection button on artists, genres, albums, playlist folders and playlists screens.
- Added an option to show a more compact total duration in songs lists

### Changed

- Updated the Portuguese (Brazil) translation

### Fixed

- Crash on startup when failing to get the system color when "Follow system color" is enabled
- Snap version does not start on the first launch
- Artists whose names start with accented letters (e.g. Ş, Ü) incorrectly grouped under # instead of their base letter in the artists list
- Tracks of multi-disc albums were grouped by disc number across albums instead of being listed per album
- When sorting large playlists, songs sometimes move back to their original position.
- Newline character not processed correctly on some lyrics

Download [here](https://github.com/digimezzo/dopamine/releases/tag/v3.0.9).

P.S.: If you enjoy Dopamine, please consider donating via [PayPal](https://www.paypal.com/donate/?hosted_button_id=N9Z4D62P24KRU) or buying me a [coffee](https://ko-fi.com/S6S11K63U). Your support keeps the music going!
