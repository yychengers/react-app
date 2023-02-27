import React, { useEffect, useState } from 'react';

const Dynamic = () => {
  const [module, setModule] = useState(null);
  useEffect(() => {
    import('./Widget.js').then((mod) => {
      console.log(mod, mod.default, 'default');
      setModule(mod.default);
    });
  }, []);

  return module ? <module /> : <div>Loading...</div>;
};

export default Dynamic;
