import { OutputTarget } from '../Summary';
import fs from 'fs';
export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
   <div>
   <h1>Analysis Output</h1>
   <dev>${report}</div>
   </div>
   `;

    fs.writeFileSync('report.html', html);
  }
}
