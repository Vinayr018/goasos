import { Injectable } from "@angular/core";
import { Box, Video, VideoBox } from "../../common/models";
import { Observable, of } from "rxjs";

@Injectable()
export class AutomationDataService {

    public get Home(): Box[] {
        return [
            { img: '/images/automation/home/gateautomation.jpg', alt: 'gateautomation', header: 'Gate automation', body: 'Automating gate operation using mobile.', id: 'one' },
            { img: '/images/automation/home/doorlock.jpg', alt: 'doorlock', header: 'Door automation', body: 'door lock operation automation using mobile.', id: 'two' },
            { img: '/images/automation/home/light.png', alt: 'light', header: 'Lights automation', body: 'control the lighting with mobile devices with RGB to change the color', id: 'three' },
            { img: '/images/automation/home/curtainautomation.jpg', alt: 'curtainautomation', header: 'Curtian automation', body: 'control curtians with mobile device', id: 'four' },
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

    public get Office(): Box[] {
        return [
            { img: '/images/automation/office/access.jpg', alt: 'office acess', header: 'Access card automation', body: 'Automate office with Access cards.', id: 'one' },
            { img: '/images/automation/office/conference.jpeg', alt: 'conference room automation', header: 'Conference room automation', body: 'Automate conference room.', id: 'two' },
            { img: '/images/automation/office/overall.webp', alt: 'overall automation', header: 'Lights & CCTV automation', body: 'automatically control the lighting and cctv cameras with mobile devices', id: 'three' },
            { img: '/images/automation/office/parking.gif', alt: 'parking', header: 'Parking automation', body: 'Parking automation', id: 'four' }
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