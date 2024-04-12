'use client'
import { useEffect, useRef, useState } from 'react';
import { ExposeParam, MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default function Write() {
  const [text, setText] = useState<string>('');
  const editorRef = useRef<ExposeParam>();

  useEffect(() => {
    editorRef.current?.on('catalog', console.log);
  }, []);

  return (
   <div className='px-8 py-8' suppressHydrationWarning>
    <MdEditor ref={editorRef} modelValue={text}  theme='dark' onChange={setText}/>
   </div>
  );
};
