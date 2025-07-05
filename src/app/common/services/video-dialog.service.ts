import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogVideoDetails, DialogVideoLinkIndex } from "../models";
import { BehaviorSubject, Observable, } from "rxjs";
import { VideoDialogComponent } from "../components";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Injectable()
export class VideoDialogService {

    private videos: DialogVideoDetails[];
    private videoSrc: BehaviorSubject<string>;
    private dialogRef: MatDialogRef<VideoDialogComponent, any> | undefined;

    public get videoSrc$(): Observable<string> {
        return this.videoSrc.asObservable();
    }

    constructor(private matDialog: MatDialog) {
        this.videos = DialogVideoDetails.Videos;
        this.videoSrc = new BehaviorSubject<string>('');
    }

    private PublishSrc(index: DialogVideoLinkIndex): number {
        const foundSource = this.videos[index - 1];
        console.log('foundrc', foundSource, foundSource.src);
        this.videoSrc.next(foundSource.src);
        return foundSource.duration;
    }

    private ShowDialog(): void {
        this.dialogRef = this.matDialog.open(VideoDialogComponent);
    }

    public ShowVideo(index: DialogVideoLinkIndex): void {
        const dur = this.PublishSrc(index);
        this.ShowDialog();
        setTimeout(() => {
            this.OnPlay();
        }, dur * 1000);
    }

    private OnPlay(): void {
        console.log('videoplay')
        if (!!this.dialogRef) {
            this.dialogRef.disableClose = false;
        }
    }
}