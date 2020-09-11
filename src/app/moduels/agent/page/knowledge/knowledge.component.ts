import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FileService } from 'src/app/core/services/file.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

const URL = 'http://localhost:4000/api/knownledge/upload';
@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {


 
  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });
 
  private fileName;
  id_user: String;
  id_agent: String;
  constructor(private fb: FormBuilder, private fileService: FileService ,  private actRoute: ActivatedRoute,
    public router: Router ) { 
    this.id_user = this.actRoute.snapshot.paramMap.get('id_user');
    this.id_agent = this.actRoute.snapshot.paramMap.get('id_agent');
  }
  title = 'ng8fileupload';
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'FQAfile' });
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response) ; 
  
     

      let result = response.substring( response.indexOf('"path"') + 16 ,  response.indexOf('","size"') ) ; 
         console.log('ImageUpload:uploaded:',result);
       
          this.fileService.addtomongodb(result, this.id_user , this.id_agent).subscribe((res) => {
            if (res.result) {
              console.log("file added to mongodb");
              
            }
          }) ;
         alert('File uploaded successfully');
    };
 }
  public onFileChange(event) {
    const reader = new FileReader();
 
    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
      };
    }
  }
 
  public onSubmit(){
    const formData = new FormData();
    formData.append('FQAfile', this.formGroup.get('file').value);
    console.log('on sub work', formData) ; 
    this.fileService.upload(formData).subscribe((response) => {
      console.log('response received is ', response.fieldname);
 });
  }

}
