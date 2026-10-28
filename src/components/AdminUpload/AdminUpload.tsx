'use client';

import { FormEvent, useState } from 'react';
import { supabase } from '@/src/lib/supabase/client';

const AdminUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      setMessage('Choose a photo');
      return;
    }

    setLoading(true);
    setMessage('');

    const filePath = `${crypto.randomUUID()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from('portfolio')
      .upload(filePath, file);

    if (uploadError) {
      setMessage(uploadError.message);
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase.from('media').insert({
      type: 'photo',
      title,
      category,
      description: description || null,
      storage_path: filePath,
      thumbnail_path: null,
    });

    if (insertError) {
      setMessage(insertError.message);
      setLoading(false);
      return;
    }

    setMessage('Photo uploaded successfully');

    setFile(null);
    setTitle('');
    setCategory('');
    setDescription('');
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload photo</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          setFile(event.target.files?.[0] ?? null);
        }}
      />

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload photo'}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default AdminUpload;
