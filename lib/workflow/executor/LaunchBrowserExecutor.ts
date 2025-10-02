import puppeteer from "puppeteer";
import { waitFor } from "@/lib/helper/waitFor";
import type { ExecutionEnvironment } from "@/types/executor";
import type { LaunchBrowserTask } from "../task/LaunchBrowser";

export async function LaunchBrowserExecutor(
  environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> {
  try {
    const websiteUrl = environment.getInput("Website URL");
    console.log("@@websiteUrl", websiteUrl);

    const browser = await puppeteer.launch({
      headless: false, // for testing
    });
    await waitFor(3000);
    await browser.close();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
