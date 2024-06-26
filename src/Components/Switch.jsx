import React, { useState } from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../Hooks/UseDarkSide';

export default function Switcher() {
const [colorTheme, setTheme] = useDarkSide();
const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

const toggleDarkMode = checked => {
setTheme(colorTheme);
setDarkSide(checked);
};

return (
<>
<div>
<DarkModeSwitch checked={darkSide} color='orange' onChange={toggleDarkMode} size={20} />
</div>
</>
);
}
