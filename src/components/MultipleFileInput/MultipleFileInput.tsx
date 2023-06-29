
import React, { useState, useEffect, memo } from 'react';
import classes from './MultipleFileInput.module.scss'
interface IMultipleFileInputProps {
  className?: string;
  maxFiles?: number;
  maxTotalSize?: number;
  values: FileList | undefined;
  onChange: (files: FileList | undefined) => void;
  setError: (error: string | undefined) => void;
  title?: string;
  error?: string;
}

const MultipleFileInput: React.FC<IMultipleFileInputProps> = memo(({
  className = '',
  maxFiles = 10,
  maxTotalSize = 20 * 1024 * 1024, // 10MB
  values,
  onChange,
  title = 'Выберите файл',
  setError,
  error
}) => {
  const [fileList, setFileList] = useState<FileList | undefined>(undefined);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  useEffect(() => {
    if (values) {
      setFileList(values);
    }
  }, [values]);

  const handleFileChange = (files: FileList | null) => {
    const selectedFiles = files;
    if (!selectedFiles) return;
    const filesArray = Array.from(selectedFiles);
    if (filesArray.length > maxFiles) {
      deleteFiles()
      setError(`Превышено максимальное количество файлов (${maxFiles}) на ${filesArray.length - maxFiles}`);
      return;
    }
    const totalSize = filesArray.reduce(
      (accumulator, file) => accumulator + file.size,
      0
    );
    if (totalSize > maxTotalSize) {
      deleteFiles()
      const bigger = Math.round((totalSize - maxTotalSize) / 1024 / 1024 * 100) / 100
      setError(`Превышен общий размер файлов (${maxTotalSize / 1024 / 1024}МБ) на ${bigger}МБ`);
      return;
    }
    setError(undefined)
    setFileList(selectedFiles);
    onChange(selectedFiles);
  };
  const deleteFiles = () => {
    setFileList(undefined);
    onChange(undefined);
  }
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    handleFileChange(droppedFiles);
    setIsDragOver(false)

  };
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!isDragOver){
      setIsDragOver(true)
    }
  };
  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false)
  };
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={handleDrop}
      className={
        [
          classes.multipleInput,
          isDragOver ? classes.multipleInput___isHover : '',
          error ? classes.multipleInput___isError : '',
          className
        ].join(' ')}
    >
      <label
        className={classes.multipleInput_input}
        title={
          fileList ? Array.from(fileList).map((file, index) => `${index + 1}. ${file.name}`)
            .join('\n')
            : title
        }
        htmlFor={title}
      >
        {error?.length ? error : title}
        <input
          id={title}
          type="file"
          multiple
          onChange={(event) => handleFileChange(event.target.files)}
          style={{ display: 'none' }}
        />
        {
          fileList?.length
            ? <span className={classes.multipleInput_inputHint}>
                {`Всего файлов: ${fileList.length}. \n Наведите, чтобы посмотреть`}
            </span>
            : null
        }

      </label>

    </div>
  );
});

export default MultipleFileInput;
