import * as cheerio from "cheerio";
import type { ExecutionEnvironment } from "@/types/executor";
import type { ExtractTextFromElementTask } from "../task/ExtractTextFromElement";

export async function ExtractTextFromElementExecutor(
  environment: ExecutionEnvironment<typeof ExtractTextFromElementTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      console.error("Selector not defined.");
      return false;
    }

    const html = environment.getInput("Html");
    if (!html) {
      console.error("HTML not defined.");
      return false;
    }

    const $ = cheerio.load(html);
    const element = $(selector);

    if (!element) {
      console.error("Element not found.");
      return false;
    }

    const extractedText = $.text(element);
    if (!extractedText) {
      console.error("Element has no text.");
      return false;
    }

    environment.setOutput("Extracted Text", extractedText);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
