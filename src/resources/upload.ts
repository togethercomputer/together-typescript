import { Files } from 'together-ai/resources/files';
import { ErrorResponse, FileResponse, upload as uploadFile } from 'together-ai/lib/upload';

declare module './files' {
  interface Files {
    upload(fileName: string, purpose: 'fine-tune'): Promise<FileResponse | ErrorResponse>;
  }
}

Files.prototype.upload = function (
  fileName: string,
  purpose: 'fine-tune',
): Promise<FileResponse | ErrorResponse> {
  return uploadFile(fileName, purpose, false);
};
