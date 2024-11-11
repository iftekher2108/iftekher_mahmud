import React from 'react';
import Typed from 'typed.js';

function TypeName() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Website Developer",
        "WP website dev",
        "Problem Solver",
        "PHP developer",
        "Laravel developer",
        "Vue developer",
        "Flutter developer",
      ],
      typeSpeed: 60,
      backDelay: 500,
      backSpeed: 60,
      showCursor: false,
      loop: !0,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h3 ref={el}/>
    </div>
  );

}

export default TypeName;