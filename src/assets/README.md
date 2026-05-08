# assets/

Place your profile image here as `profile.jpg` (or any format).

Then in `src/data/data.js`, import it at the top:

```js
import profileImg from "../assets/profile.jpg";
```

And update `profileImage` in `personalInfo`:

```js
profileImage: profileImg,
```

Also place your `resume.pdf` inside the `public/` folder (not here).
