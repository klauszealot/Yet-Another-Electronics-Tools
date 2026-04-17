# Design System: Liquid Glass & Neumorphic Precision

## 1. Overview & Creative North Star
**Creative North Star: "The Tactile Ether"**

This design system moves away from the rigid, flat "app" aesthetic and toward a high-end physical instrument. It treats the interface as a single sheet of liquid glass suspended in a void. By merging the soft, extruded volume of Neumorphism with the ethereal transparency of Glassmorphism, we create a UI that feels both grounded and weightless. 

The goal is to break the "calculator template" look. We eschew standard grids in favor of intentional asymmetry—where large display numerals breathe in vast white space, and controls feel like molded indentations in a premium hardware surface.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep obsidian tones with electric, translucent accents. 

### The Surface Hierarchy (Nesting Depth)
To achieve "The Tactile Ether," we eliminate all structural lines. Boundaries are defined by the physical stacking of containers:
*   **Base Layer:** `surface` (#131313) – The infinite void.
*   **Sectional Layer:** `surface_container_low` (#1C1B1B) – Subtle areas for grouped controls.
*   **Component Layer:** `surface_container_high` (#2A2A2A) – For buttons that appear "raised" from the surface.
*   **Active/Focus Layer:** `surface_bright` (#3A3939) – For elements requiring immediate tactile attention.

### The Rules of Engagement
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited. Sectional transitions must be achieved via tonal shifts (e.g., a `surface_container_low` keypad resting on a `surface` background).
*   **The "Glass & Gradient" Rule:** Floating overlays (modals, tooltips, or top-tier functions) must use a semi-transparent `surface_variant` with a `backdrop-filter: blur(20px)`. 
*   **Signature Textures:** Use a subtle linear gradient on primary action buttons, transitioning from `primary` (#ADC6FF) to `primary_container` (#4B8EFF) at a 135-degree angle. This adds a "jewel" finish to the liquid aesthetic.

---

## 3. Typography: The Editorial Scale
We utilize the **San Francisco (system-ui)** family to maintain a native, high-precision feel. The hierarchy is designed to feel like a premium technical journal.

*   **Display (The Result):** `display-lg` (3.5rem). Used for the final calculation result. It should have generous letter-spacing (-0.02em) and sit in the top-right of the viewport with significant breathing room.
*   **Headlines (Category Labels):** `headline-sm` (1.5rem). Used for secondary data points or mode indicators (e.g., "VOLTAGE", "RESISTANCE").
*   **Body (Utility):** `body-md` (0.875rem). For instructional text or history logs.
*   **Labels (The Keys):** `label-md` (0.75rem). Used for button legends. These should be set in Medium or Semibold weight to ensure legibility against blurred backgrounds.

---

## 4. Elevation & Depth: Neumorphic Logic
Depth is not a decoration; it is the architecture.

*   **The Layering Principle:** Instead of shadows, use "stacking." A `surface_container_highest` card sitting on a `surface_dim` background provides a natural, soft lift.
*   **Liquid Neumorphism (Inner & Outer):**
    *   **Raised (Default):** A 2px highlight (on-surface at 5% opacity) on the top-left and a 4px soft shadow (surface_container_lowest at 40% opacity) on the bottom-right.
    *   **Pressed (Active):** Switch to an `inner-shadow`. This simulates the physical displacement of the glass surface.
*   **Ambient Shadows:** For floating elements, use extra-diffused shadows. 
    *   *Blur:* 40px–60px.
    *   *Opacity:* 6% of the `primary` color to create a "glow" rather than a dark "drop shadow."
*   **The "Ghost Border" Fallback:** If a container requires further definition, use `outline_variant` at 15% opacity. Never 100%.

---

## 5. Components

### The Keypad (Buttons)
*   **Standard Key:** `surface_container_high` background with `rounded-lg` corners. Soft Neumorphic extrusion.
*   **Operator Key:** `secondary_container` background. These should feel "recessed" to differentiate from numeric inputs.
*   **Primary Action (Calculate/Enter):** A "Liquid Glass" pill using the `primary` gradient with a `surface_tint` glow.
*   **Spacing:** Use a minimum of 12px between keys to emphasize the "clean minimalism" vibe.

### Inputs & Displays
*   **The Display Field:** No container. The numbers should float over the `surface` background. Use a `surface_bright` subtle glow behind the active cursor to indicate focus.
*   **Input Fields:** Treat these as "wells." Use an inner shadow and `surface_container_lowest` to make the input area feel carved into the device.

### Chips & Selectors
*   **Unit Toggles (V, Ω, A):** Selection chips must use the "Glassmorphism" effect. When selected, the chip gains a `primary` glow and the background blur increases.

### Lists (History/Logs)
*   **The "No-Divider" Rule:** Forbid 1px dividers. Separate history items using a 16px vertical gap. The distinction is made through the rhythm of the typography (`title-sm` for the value, `label-sm` for the timestamp).

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place the main action button off-center or give it a unique width to break the grid.
*   **Prioritize White Space:** If the UI feels "crowded," remove background containers before you reduce font sizes.
*   **Animate Tactility:** When a button is pressed, the transition to the inner shadow should be fluid (200ms cubic-bezier).

### Don't:
*   **Don't use pure black (#000):** Use `surface` (#131313) to allow for the subtle depth of shadows to remain visible.
*   **Don't use high-contrast borders:** They shatter the "liquid glass" illusion. 
*   **Don't use standard drop shadows:** Avoid small, dark, or sharp shadows. They make the UI look "cheap" and dated.
*   **Don't crowd the edges:** Maintain a minimum 24px margin around the screen perimeter to keep the "premium editorial" feel.