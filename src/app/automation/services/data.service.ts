import { Injectable } from "@angular/core";
import { Box, SlideBox, Video, VideoBox } from "../../common/models";
import { Observable, of } from "rxjs";

@Injectable()
export class AutomationDataService {

    public get Home(): VideoBox[] {
        return [
            { header: 'Gate automation', src: '/images/automation/home/gate_automation.mp4', body: 'Automating gate operation using mobile. You Can Open and close the gate using mobile application remotely', id: 'one', poster: '' },
            { header: 'Digital Door Lock and Video Door Phone', src: '/images/automation/home/door.mp4', body: 'Door lock operation automation using mobile. You can open and close the door digitally using mobile remotely. You can See the visitor or guest in the Indoor Monitor provided in the house  and door can be opened remotely', id: 'two', poster: '' },
            { header: 'Lights automation', src: '/images/automation/home/lights_and_fan.mp4', body: 'Control the light operations including the colour and intensity of the light remotely using mobile and voice  and can also be scheduled. AC and Geyser can be scheduled with time. You can also schedule AC and Geyser w.r.t its proximity from mobile [i..e. : while returning from work based on distance from House AC or Geyser can be switched on, on leach home you can Save your time and can get the comfort]', id: 'three', poster: '' },
            { header: 'Curtain automation', src: '/images/automation/home/window_blind_control.mp4', body: 'You can open and your curtain and Blind using mobile and voice. It can also be scheduled with time.', id: 'four', poster: '' },
        ];
    }

    public get Industry$(): Observable<Box[]> {
        return of([
            { img: '/images/automation/industry/fms.png', alt: 'FMS', header: 'Fleet management system on cloud', body: 'Interface with ADAS processor for ADAS event recognition, Connects to cloud via GPRS through a cellular modem, Integrated GNSS for Navigation', id: 'one' },
            { img: '/images/automation/industry/machine.png', alt: 'machine', header: 'Machine Automation', body: 'Automate and monitor Air Compressors, Chillers, Generators, smart meters, Circuit breakers', id: 'two' },
            { img: '/images/automation/industry/coldstorage.png', alt: 'cold storage', header: 'Cold storage monitoring', body: 'BLE nodes to measure temperature and humidity, GPS sensor in ioT device will continuously keep track of location', id: 'three' },
            { img: '/images/automation/industry/tracking.png', alt: 'tracking', header: 'Asset tag and trace & Geo fencing', body: 'Bluetooth (BLE) Beacons/tags, Readers Gateways to read beacon signals and to communicate to cloud, Triangulation for indoor positioning. Geo fencing as per warehouse perimeter', id: 'four' },
            { img: '/images/automation/industry/sos.png', alt: 'SOS', header: 'Panic button/SoS/Emergency button', body: 'GPS & GPRS based device for raising panic alerts, alarms, triggering SoS and emergency requests configurable via mobile app. Location, vehicle & driver details sent regularly to cloud', id: 'five' },
            { img: '/images/automation/industry/substation.png', alt: 'substation', header: 'Power Substation Monitoring & Control', body: 'GPRS based IoT device, MODBUS RTU communication to fetch electrical parameters to monitor power quality from the control panel. Track changes in all electrical parameters, circuit breakers, Isolators & Relay status to identify the faults and suggest recovery tips to maintain the power quality', id: 'six' },
            { img: '/images/automation/industry/solar.png', alt: 'solar', header: 'Remote monitoring of Solar farm', body: 'GPRS based, condition monitoring of solar panel, MPPT charger & Battery, Retrofitting of custom sensors to measure power, Condition monitoring, Predictive maintenance of Solar plant equipment', id: 'seven' }
        ]);
    }

    public get IndustryVideos$(): Observable<Video[]> {
        return of([
            { title: 'Blueport OBD-II interface with mobile', embed: true, poster: '', src: '0vTfGBHIq8s' },
            { title: 'Industrial Remote monitoring', embed: true, poster: '', src: 'RDFjpO41RQ0' },
            { title: 'Crevavi Konnect-Wi IoT', embed: true, poster: '', src: 'oLoU_j8Ot3Q' },
        ]);
    }

    public get Office(): SlideBox[] {
        return [
            {
                header: 'Timesheet Automation', body: 'Automate office Timesheet with Access cards, finger print & facial recognition.',
                imgs: [
                    { src: '/images/automation/office/new/probio.png', alt: 'ProBio Plus Series' },
                    { src: '/images/automation/office/new/D32.png', alt: 'D3' },
                    { src: '/images/automation/office/new/LX50.jpg', alt: 'LX50' },
                    { src: '/images/automation/office/new/WL10.png', alt: 'WL10' }]
            },
            {
                header: 'Access Control', body: 'Restrict the access of your office premise of Unauthorised access, we provide card based access control along with biometrics like facial recognistion and finger print.',
                imgs: [
                    { src: 'https://d1agmp9y4cki1i.cloudfront.net/images/20240627/TS2000%20Plus_500x500.png', alt: 'TS1000 Plus Series' },
                    { src: 'https://d1agmp9y4cki1i.cloudfront.net/images/20240627/TS1000%20plus%20series_500x500.png', alt: 'TS1000 Plus Series' },
                    { src: 'https://d1agmp9y4cki1i.cloudfront.net/images/20240612/SBTL700_01.png', alt: 'SBTL700 Series' },
                ]
            },
            {
                header: 'Security', body: 'we provide wide range of products required to secure your office with bagage scanners, door frame metal detector & hand held metal detector.',
                imgs: [
                    { src: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211217/4d6a9663cb6f56302e821c3767f4ac7e.png', alt: 'ZKX5030C scanner' },
                    { src: 'https://d1agmp9y4cki1i.cloudfront.net/images/20240223/ZKX4233A_03.png', alt: 'ZKX4233A scanner' },
                    { src: 'https://d1agmp9y4cki1i.cloudfront.net/images/20240704/ZK-D1010L_1-01.png', alt: 'ZK-D1010L' },
                    { src: 'https://d1agmp9y4cki1i.cloudfront.net/images/20240613/ZK-D2110.png', alt: 'ZK-D2110' }]
            },
            {
                header: 'Video Surveilliance', body: 'secure your office premises with video surveilliance with both Network and Analog cameras.',
                imgs: [
                    { src: 'https://d1agmp9y4cki1i.cloudfront.net/images/20230904/EL-54N28I.png', alt: 'EL-54N28I' },
                    { src: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211221/aa4ca3a151cd6f70257a81c8e5c17ff5.png', alt: 'DL-854N28B-E3' },
                    { src: 'https://d1agmp9y4cki1i.cloudfront.net/images/20230404/PS-32B10C.png', alt: 'PS-32B10C' },
                    { src: 'https://d1agmp9y4cki1i.cloudfront.net/images/20230404/PL-32C20D.png', alt: 'PL-32C20D' }]
            }
        ];
    }

    public get Security(): Box[] {
        return [
            { img: '/images/automation/security/cctv.jpeg', alt: 'cctv', header: 'CCTV installation', body: 'CCTV installation powered by Solar panel', id: 'one' },
            { img: '/images/automation/security/cctvdevice.jpg', alt: 'cctv devices', header: 'CCTV installation with centeralised control', body: 'CCTV installation with centeralised control via mobile app', id: 'two' },
            { img: '/images/automation/security/cctvnotification.jpg', alt: 'cctv notification', header: 'CCTV activity notification', body: 'get notified on mobile App whenever there is any movment detected', id: 'three' },
        ];
    }

    public get Space$(): Observable<VideoBox[]> {
        return of([
            { poster: '/images/automation/space/beddesk.png', src: 'images/automation/space/bed-with-desk.mp4', header: 'Bed with storage and iDesk', body: 'Bed with storage and iDesk and comes in all sizes (Single bed, King size, queen size)', id: 'one' },
            { poster: '/images/automation/space/bedstorage.png', src: 'images/automation/space/bed-with-storage.mp4', header: 'Bed with storage', body: 'Bed with storage and comes in all sizes (Single bed, King size, queen size)', id: 'two' },
            { poster: '/images/automation/space/bedsofa.png', src: 'images/automation/space/desk-control.mp4', header: 'Bed with storage and Sofa', body: 'Bed with storage and Sofa and comes in all sizes (Single bed, King size, queen size)', id: 'three' },
        ]);
    }
}