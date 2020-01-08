import { Component } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { User } from 'src/model/user';

declare let swal: any;

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.style.scss'],
    providers: [
        UserService
    ]

})
export class CreateComponent {
    model: any = {};
    invalid = true;

    constructor(
        private userService: UserService
    ) { }

    onCreate = (f) => {
        this.invalid = f.valid;
        if (this.invalid) {
            swal.fire({
                title: 'Thêm Người Dùng',
                text: 'Bạn có chắc chắn rằng mình muốn thêm khách hàng này.?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Tôi đồng ý!',
                cancelButtonText: 'Từ bỏ!'
            }).then(async result => {
                try {
                    if (result.value) {
                        await this.userService.createuser(this.model as User);
                        return this.model = {},
                            f.submitted = false,
                            swal.fire('Thành Công', 'Tạo mới thành công!', 'success');
                    }
                } catch (ex) {
                    /*begin:: write log ex here: break*/
                    return console.log(ex),
                        swal.fire('Hệ Thống', 'Có lỗi xảy ra. Xin vui lòng kiểm tra lại kết nối mạng.!', 'warning');
                }
            });
        }
    }
}
