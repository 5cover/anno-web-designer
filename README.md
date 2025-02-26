# Anno Web Designer

Web-based Anno grid layout tool.

Inspired from [Anno Designer](https://github.com/AnnoDesigner/anno-designer).

✅ **Cross-Platform** – No need to mess with Wine, dependencies, or OS compatibility. Runs on Windows, Linux, Mac, tablets, even phones (if designed well).\
✅ **No Installation** – Just open a browser, start designing!  \
✅ **Easy Sharing** – Users can save & share layouts with a simple link.  \
✅ **Modern UI**\

## Core Features (MVP - Minimum Viable Product)

- **Grid System** – Render a simple grid with customizable sizes.
- **Drag & Drop Buildings** – Allow users to place rectangles (representing buildings) onto the grid.
- **Building Presets** – Load JSON/XML data from Anno Designer’s presets.
- **Basic Styling** – Color-coded buildings, labels, and influence areas.
- **Export as Image** – Generate a PNG of the layout.

## Future ideas

- **Undo/Redo System** – Essential for usability.
- **Save/Load Layouts** – Store in localStorage, IndexedDB, or even Firebase/GitHub Gists.
- **Cloud Sync** – Let users save/load layouts from an account.
- **Multi-User Collaboration** – Real-time layout editing via WebSockets.
- **Advanced UI** – Snap-to-grid, rotate buildings, custom labels/icons.
- **Community** – collaborative editing, cloud saves, or a public layout gallery.
- **Layout statistics box**
  - **Bounding box** &ndash; rectangle or free-form
  - Which buildings count as "used space"
  - Custom-sized building representing free space that can be used by anything
  - used area / total area = space efficiency %
  - up to [wiki](https://anno2070.fandom.com/wiki/Building_Layouts) standards
