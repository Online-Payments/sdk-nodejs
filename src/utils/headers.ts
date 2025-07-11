import dateformat from "dateformat";
import { IncomingHttpHeaders } from "http";
import { Header, SdkContext } from "../model/index.js";
import { ShoppingCartExtension } from "../model/domain/index.js";

export function date(): string {
  return dateformat("GMT:ddd, dd mmm yyyy HH:MM:ss") + " GMT";
}

interface ServerMetaInfo {
  sdkCreator: string;
  sdkIdentifier: string;
  platformIdentifier: string;
  integrator: string;
  shoppingCartExtension?: ShoppingCartExtension;
}

export function serverMetaInfo(sdkContext: SdkContext): Header {
  const info: ServerMetaInfo = {
    sdkCreator: "OnlinePayments",
    sdkIdentifier: "NodejsServerSDK/v5.1.0",
    platformIdentifier: `${process.env["OS"]} Node.js/${process.versions.node}`,
    integrator: sdkContext.getIntegrator()
  };
  if (sdkContext.getShoppingCartExtension() !== null) {
    info.shoppingCartExtension = sdkContext.getShoppingCartExtension();
  }
  return {
    key: "X-GCS-ServerMetaInfo",
    value: Buffer.from(JSON.stringify(info)).toString("base64")
  };
}

export function isBinaryContent(contentType?: string | null): boolean {
  return !!contentType && !contentType.startsWith("text/") && contentType.indexOf("json") === -1 && contentType.indexOf("xml") === -1;
}

export function isJSON(contentType?: string | null): boolean {
  if (contentType == null) {
    return true;
  }
  const lowerCaseContentType = contentType.toLocaleLowerCase();
  return lowerCaseContentType.startsWith("application/json") || lowerCaseContentType.startsWith("application/problem+json");
}

const dispositionFilenamePattern = /(?:^|;)\s*filename\s*=\s*(.*?)\s*(?:;|$)/i;

function trimQuotes(filename: string): string {
  if (filename.length < 2) {
    return filename;
  }
  if ((filename.startsWith('"') && filename.endsWith('"')) || (filename.startsWith("'") && filename.endsWith("'"))) {
    return filename.substring(1, filename.length - 1);
  }
  return filename;
}

export function dispositionFilename(headers: IncomingHttpHeaders): string | null {
  const disposition = headers["content-disposition"];
  if (disposition) {
    const match = disposition.match(dispositionFilenamePattern);
    if (match) {
      const filename = match[1];
      return trimQuotes(filename);
    }
  }
  return null;
}

export function contentLength(headers: IncomingHttpHeaders): number | string | null {
  const length = headers["content-length"];
  if (length) {
    const intLength = parseInt(length);
    return isNaN(intLength) ? length : intLength;
  }
  return null;
}

export default {
  date,
  serverMetaInfo,
  isBinaryContent,
  isJSON,
  dispositionFilename,
  contentLength
};
