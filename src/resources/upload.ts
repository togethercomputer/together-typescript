import { Files } from 'together-ai/resources/files';
import { ErrorResponse, FileResponse, upload as uploadFile } from 'together-ai/lib/upload';

declare module './files' {
  interface Files {
    upload(fileName: string): Promise<FileResponse | ErrorResponse>;
  }
}

Files.prototype.upload = function (fileName: string): Promise<FileResponse | ErrorResponse> {
  return uploadFile(fileName, false);
};
