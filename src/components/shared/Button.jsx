export function Button({ variant = 'primary', children, ...props }) {
    const base = 'px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2';
    const styles = {
      primary: base + ' bg-primary text-secondary hover:bg-primary/90',
      secondary: base + ' bg-white text-gray-800 hover:scale-105'
    };
    return <button className={styles[variant]} {...props}>{children}</button>;
  }