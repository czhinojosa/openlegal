import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  documents: any[] = [
    {
      'name': 'Document 1',
      'date': '01/01/2021',
      'url': 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'

    }
  ]

  deleteDocument(index: number) {
    // this.documents.splice(index, 1);
  }


}
