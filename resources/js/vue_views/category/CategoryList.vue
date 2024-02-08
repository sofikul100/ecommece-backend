<template>
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="header-icon">
      <i class="fa fa-folder-o" aria-hidden="true"></i>
    </div>
    <div class="header-title">
      <h1>Categorie</h1>
      <small> Categorie features</small>
      <ol class="breadcrumb hidden-xs">
        <li>
          <a><i class="pe-7s-home"></i> Dashboard</a>
        </li>
        <li class="active">Categorie List</li>
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
                <a type="button" class="btn btn-labeled btn-primary m-b-5">
                  <span class="btn-label"
                    ><i class="fa fa-plus-circle" aria-hidden="true"></i> </span
                  >Add Categorie
                </a>
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
                    <div class="col-md-4">

                    </div>
                    <div class="col-md-6" id="input-filter-col">
                        <input type="text" class="form-control" placeholder="Search Here.....">
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
                      <span class="badge btn-restore">Active</span>
                    </td>
                    <td id="action_content">
                      <a title="Inactive" href="" class="btn-restore btn-xs">
                        <i id="icon" class="fa fa-toggle-on"></i>
                      </a>

                      <a type="button" href="" class="btn-edit btn-xs"
                        ><i class="fa fa-pencil"></i>
                      </a>
                      <button
                        type="submit"
                        class="btn-delete btn-xs confirm-button"
                        title="Delete"
                        style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="row">
                  <div class="pane">
                       <div class="col-md-4">
                            <span class="table_footer_text">TOTAL CATEGORIES 〖 200 〗 ⇆  SHOWING 〖 10 〗</span>
                       </div>
                       <div class="col-md-5"></div>
                       <div class="col-md-3">
                            <div class="pagination_custom">
                                <button class="btn btn-primary btn-xs"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>
                                <div class="pagination_item">
                                     <input type="number" min="1" value="1"  id="page_number">
                                </div>
                                <button class="btn btn-primary btn-xs"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
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