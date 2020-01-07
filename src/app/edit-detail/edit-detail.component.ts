import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/model/user';

declare let swal: any;

@Component({
    selector: 'app-edit-detail',
    templateUrl: './edit-detail.component.html',
    styleUrls: ['./edit-detail.component.scss'],

})
export class EditDetailComponent implements OnInit {
    invalid = true;
    model: any = {};
    userId: any;

    constructor(
        private service: UserService,
        private route: ActivatedRoute,
    ) { }

    async ngOnInit() {
        try {
            this.userId = this.route.snapshot.paramMap.get('id');
            /** load data from service */
            this.service.getuserById(this.userId).subscribe(
                next => {
                    this.model = next;
                }
            );
        } catch (ex) {
            /*begin:: write log ex here: break*/
            return console.log(ex),
                swal.fire('Hệ Thống', 'Có lỗi xảy ra. Xin vui lòng kiểm tra lại kết nối mạng.!', 'warning');
        }
    }

    updateUser = (f) => {
        this.invalid = f.valid;
        if (this.invalid) {
            try {
                swal.fire({
                    title: 'Thông báo',
                    text: 'Bạn chắc chắn rằng mình muốn cập nhật thông tin người dùng này không?',
                    icon: 'warning',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Tôi đồng ý!',
                    cancelButtonText: 'Từ bỏ!'
                }).then(async (result) => {
                    if (result.value) {
                        await this.service.updateuser(this.userId, this.model as User);
                        return swal.fire('Thành Công', 'Cập nhật người dùng thành công!', 'success');
                    }
                });
            } catch (error) {

            }
        }
    }
}
