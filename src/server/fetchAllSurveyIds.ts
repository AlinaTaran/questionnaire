'use server';

import path from 'path';
import fs from 'fs/promises';

export async function fetchAllSurveyIds(): Promise<string[]> {
  try {
    const configDir = path.join(process.cwd(), 'configs');
    const files = await fs.readdir(configDir);

    return files
      .filter((file) => file.endsWith('.json'))
      .map((file) => path.basename(file, '.json'));
  } catch (error) {
    console.error('Error reading survey config directory:', error);
    return [];
  }
}
