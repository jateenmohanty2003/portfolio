const Loading = () => {
  return (
    <div className='fixed inset-0 z-20 h-screen w-screen overflow-hidden bg-transparent pointer-events-none'>
      {/* Used the clean custom class we just made in globals.css */}
      <div className='h-full w-full bg-accent animate-slide-up' />
    </div>
  );
};

export default Loading;
