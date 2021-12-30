import { ApiService } from './../../core/services/api.service';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
	@ViewChild(PdfViewerComponent, {static: false})
	private pdfComponent!: PdfViewerComponent;

	pageRendered() {
		this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
	}

	//pdfSrc = "/assets/Resume 4.2.pdf";
	//pdfSrc = "http://localhost:4200/assets/Resume%204.2.pdf"
	pdfSrc = "https://docs.google.com/document/d/1tSLgNUnsVOyIkVmC5L2CEkecOPpy9-5H4f3PoZ7U4e8/export?format=pdf"

	htmlSrc: string;// = "https://docs.google.com/document/d/1tSLgNUnsVOyIkVmC5L2CEkecOPpy9-5H4f3PoZ7U4e8/export?format=html"

	constructor(
		private api: ApiService
	) { }

	ngOnInit(): void {
		/* this.api.getDocumentHTML().subscribe(stuff => {
			console.log(stuff);
			this.htmlSrc = stuff;
		}); */
	}

}
