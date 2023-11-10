import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Booking } from 'src/app/model/booking/booking.model';
import { BookingsService } from 'src/app/shared/bookings/bookings.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {
  bookings?: Booking[]

  constructor(private bookingservice: BookingsService, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.spinner.show()
    this.bookingservice.getAll().snapshotChanges().pipe(
      map(changes => {
        return changes.map((c: any) => {
          return ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        })
      })
    ).subscribe((resultdata: any) => {
      this.spinner.hide()
      this.bookings = resultdata
    })
  }

  time: any
  date: any
  getdate(datetime: any) {
    // console.log(datetime)
    let date = new Date(datetime);
    this.time = date.toLocaleTimeString();
    this.date = date.toLocaleDateString();
    // console.log('time', this.time, this.date);
    return (this.date + " " + this.time)
  }

  can(data: any) {
    // console.log(data.id)
    const newdata = {
      bookingStatus: 'Cancelled By Admin'
    }

    this.bookingservice.update(data.id, newdata).then(() => {
      this.spinner.hide()
      this.toastr.success("Cancelled")
    })
  }
  appro(data: any) {
    // console.log(data.id)
    const newdata = {
      bookingStatus: 'Approved By Admin'
    }

    this.bookingservice.update(data.id, newdata).then(() => {
      this.spinner.hide()
      this.toastr.success("Approved")
    })
  }
}
