import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'moment';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import DataTable from "react-data-table-component";
import { Paper, Checkbox } from "@material-ui/core";

import { Link } from "react-router-dom";
import { useAlert } from 'react-alert';
import { confirm } from "react-confirm-box";
import { deleteAppointmentById, getPatientAppointments,  } from '../../../Actions/User';
import PatientSideBar from '../Layout/PatientSideBar';
import Loader from '../Layout/Loader';

const PatientAppointments = () => {

  const dispatch = useDispatch();
  
  const alert = useAlert();
  const { error, message } = useSelector((state) => state.apiStatus);
  useEffect(() => {
    dispatch(getPatientAppointments());
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);

  let { loading, patientAppointments } = useSelector((state) => state.patientAppointments);

  let allDoctorAppointments = patientAppointments && patientAppointments.map((element)=>{
    let cdate = Moment(element.createdAt).format('DD-MM-YYYY');
    let appDate = Moment(element.appointmentDate).format('DD-MM-YYYY');
    let doctorName = element.doctors[0].name
    element = {
      ...element,
      cdate : cdate,
      appDate : appDate,
      doctorName
    }
    return element;
  })


  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    }
  }

  const handleDeleteClick = async (e) =>{
    let id = e.target.id;
    const result = await confirm("Do you want to delete this?",options);
    if (result) {
      await dispatch(deleteAppointmentById(id));
      alert.success("Appointment deleted successfully");
      dispatch(allDoctorAppointments());
      dispatch({ type: "clearErrors" });
      dispatch({ type: "clearMessage" });
    }
  }


  const columns = [
    {
      name: "ID",
      selector: "_id",
      sortable: true,
    },
    {
      name: "DOCTOR NAME",
      selector: "doctorName",
      sortable: true,
    },
    {
      name: "DATE",
      selector: "appDate",
      sortable: true,
    },
    {
        name: "Slot Time",
        selector: "appointmentTime",
        sortable: true,
    },
    {
      name: "Created Date",
      selector: "cdate"
    },
    // {
    //   cell:(row) => <div className="d-flex">
    //   <button type='button' id={row._id} onClick={handleDeleteClick} class="btn btn-danger shadow btn-sm sharp mr-1"><i class="fa fa-trash"></i></button></div>,
    //   name: "ACTIONS",
    // },
  ];

  const isIndeterminate = (indeterminate) => indeterminate;
  const selectableRowsComponentProps = { indeterminate: isIndeterminate };


  return (
    <>
    <Header title={'Appointments'}/>
    <PatientSideBar/>
    { loading === true ? <Loader /> :(<div className="content-body">
        <div className="container-fluid">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header d-block">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="card-title">All Appointments</h4>
                    </div>
                    <div className="col-md-6 text-right">
                      <Link
                        to="/patient/create-appointment"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fa fa-plus"></i> Create Appointment
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <Paper>
                    <DataTable
                      columns={columns}
                      data={allDoctorAppointments}
                      defaultSortField="patientName"
                      pagination
                      selectableRows
                      selectableRowsComponent={Checkbox}
                      selectableRowsComponentProps={
                        selectableRowsComponentProps
                      }
                    />
                  </Paper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}
      <Footer/>
    </>
  );
};

export default PatientAppointments;
