<script setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

const dialogVisible = ref(false);
const imageUrl = ref("");

// === modal close ====
const handleClose = (done) => {
    ElMessageBox.confirm("Are you sure to close this dialog?")
        .then(() => {
            done();
        })
        .catch(() => {
            // catch error
        });
};

// === uploaded image preview ====
const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        imageUrl.value = reader.result;
    };
    reader.readAsDataURL(file);
};
</script>
<template>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="header-icon">
            <i class="fa fa-folder-o" aria-hidden="true"></i>
        </div>
        <div class="header-title">
            <h1>Categories</h1>
            <small> Categories features</small>
            <ol class="breadcrumb hidden-xs">
                <li>
                    <a><i class="pe-7s-home"></i> Dashboard</a>
                </li>
                <li class="active">Categories List</li>
            </ol>
        </div>
    </section>
    <!-- Content Header (Page header) End-->
    <section class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="panel panel-bd lobidrag panel-primary">
                    <div class="panel-heading">
                        <div class="btn-group">
                            <!-- <a
                                type="button"
                                class="btn btn-labeled btn-primary m-b-5"
                            >
                                <span class="btn-label"
                                    ><i
                                        class="fa fa-plus-circle"
                                        aria-hidden="true"
                                    ></i> </span
                                >Add Category
                            </a> -->
                            <!-- Modal -->
                            <el-button plain @click="dialogVisible = true">
                                Add Category
                            </el-button>

                            <el-dialog
                                v-model="dialogVisible"
                                title="Add Category"
                                width="500"
                            >
                                <div>
                                    <form>
                                        <div class="form-group">
                                            <label>Category Name</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Enter Category Name"
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label>Picture upload</label>
                                            <input
                                                class="form-control"
                                                type="file"
                                                name="picture"
                                                @change="handleFileChange"
                                            />
                                            
                                            <img
                                                v-if="imageUrl"
                                                :src="imageUrl"
                                                class="img-responsive "
                                                style="margin-top: 2rem;"
                                                alt="Uploaded Image"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select class="form-control">
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <template #footer>
                                    <div class="dialog-footer">
                                        <el-button
                                            @click="dialogVisible = false"
                                            >Cancel</el-button
                                        >
                                        <el-button
                                            type="primary"
                                            @click="dialogVisible = false"
                                        >
                                            Save
                                        </el-button>
                                    </div>
                                </template>
                            </el-dialog>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="row" id="table_header">
                            <div class="panel-header">
                                <div class="col-md-2" id="input-filter-col">
                                    <select name="" id="" class="form-control">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="60">60</option>
                                    </select>
                                </div>
                                <div class="col-md-4"></div>
                                <div class="col-md-6" id="input-filter-col">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Search Here....."
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Sl No</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <span class="badge btn-restore"
                                                >Active</span
                                            >
                                        </td>
                                        <td id="action_content">
                                            <a
                                                title="Inactive"
                                                href=""
                                                class="btn-restore btn-xs"
                                            >
                                                <i
                                                    id="icon"
                                                    class="fa fa-toggle-on"
                                                ></i>
                                            </a>

                                            <a
                                                type="button"
                                                href=""
                                                class="btn-edit btn-xs"
                                                ><i class="fa fa-pencil"></i>
                                            </a>
                                            <button
                                                type="submit"
                                                class="btn-delete btn-xs confirm-button"
                                                title="Delete"
                                                style="
                                                    box-shadow: rgba(
                                                            0,
                                                            0,
                                                            0,
                                                            0.24
                                                        )
                                                        0px 3px 8px;
                                                "
                                            >
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="row">
                            <div class="">
                                <div class="col-md-6">
                                    <span class="table_footer_text"
                                        >TOTAL CATEGORIES 〖 200 〗 ⇆ SHOWING 〖
                                        10 〗</span
                                    >
                                </div>
                                <!-- <div class="col-md-3"></div> -->
                                <div class="col-md-6" id="pagination">
                                    <div class="pagination_custom">
                                        <button class="btn btn-primary btn-xs">
                                            <i
                                                class="fa fa-long-arrow-left"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                        <div class="pagination_item">
                                            <input
                                                type="number"
                                                min="1"
                                                value="1"
                                                id="page_number"
                                            />
                                        </div>
                                        <button class="btn btn-primary btn-xs">
                                            <i
                                                class="fa fa-long-arrow-right"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
</template>
<style scoped>
#app {
    padding: 20px;
}

#preview {
    display: flex;
    justify-content: center;
    align-items: center;
}

#preview img {
    max-width: 100%;
    max-height: 500px;
}
</style>
