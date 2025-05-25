import React, { useState } from 'react';
import PostJobModal from '@/Components/PostJobModal';
import { usePage } from '@inertiajs/react';

const PostJobButton = () => {
  const [open, setOpen] = useState(false);
  const user = usePage().props.auth.user;
  return (
    <>
      <button
        className="bg-orange-500 hover:bg-orange-600 uppercase font-bold text-white px-4 py-2 rounded"
        aria-label="Post a new job for free"
        onClick={() => {
          if (user) {
            setOpen(true);
          } else {
            window.location.href = '/login';
          }
        }}
      >
        Post a new job
      </button>
      <PostJobModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default PostJobButton;
