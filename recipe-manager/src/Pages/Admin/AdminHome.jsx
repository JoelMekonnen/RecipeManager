import React from 'react'
// import AppSidebar from '../../Components/AppSidebar'
import {AppHeader, AppSidebar, AppFooter, AppContent} from '../../Components/index'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { getStyle, hexToRgba } from '@coreui/utils'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import {
    CRow,
    CCol,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle,
    CWidgetStatsA,
    CCard,
    CContainer,
    CCardBody,
    CButton,
    CButtonGroup,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
export default function AdminHome() {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div className="!tw-bg-gray-900"> 
         <AppSidebar  />
        <div className="wrapper d-flex flex-column  tw-bg-gray-900" style={{ marginTop:"0px" }}>
              <AppHeader className="tw-bg-gray-900 tw-border-none"/>
              <CContainer className="min-vh-100">    
                <div className="body flex-grow-1 px-3">
                     <CRow className="justify-content-center border-bottom-0">
                          <CCol sm={6} lg={3}>
                              <CWidgetStatsA 
                              className='mb-4 !tw-bg-gray-800 !tw-text-white' 
                              value={ 
                                  <>  
                                      100{ ' '}
                                        <span className='fs-6 fw-normal'>
                                             (+10.5% <CIcon icon={cilArrowTop}/>)
                                        </span>
                                  </>
                               }
                               action={
                                <CDropdown alignment="end">
                                  <CDropdownToggle color="transparent" caret={false} className="p-0">
                                    <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                                  </CDropdownToggle>
                                  <CDropdownMenu>
                                    <CDropdownItem>Add new Recipe</CDropdownItem>
                                    <CDropdownItem>View All Recipes</CDropdownItem>
                                    <CDropdownItem>View Deleted Recipes</CDropdownItem>
                                  </CDropdownMenu>
                                </CDropdown>
                              }
                              title='My Recipes'
                              chart={
                                <CChartLine
                                  className="mt-3 mx-3"
                                  style={{ height: '70px' }}
                                  data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                      {
                                        label: 'Number of Recipes',
                                        backgroundColor: 'transparent',
                                        borderColor: 'rgba(255,255,255,.55)',
                                        pointBackgroundColor: getStyle('--cui-primary'),
                                        data: [20, 25, 30, 45, 50, 55, 80],
                                      },
                                    ],
                                  }}
                                  options={{
                                    plugins: {
                                      legend: {
                                        display: false,
                                      },
                                    },
                                    maintainAspectRatio: false,
                                    scales: {
                                      x: {
                                        grid: {
                                          display: false,
                                          drawBorder: false,
                                        },
                                        ticks: {
                                          display: false,
                                        },
                                      },
                                      y: {
                                        min: 10,
                                        max: 100,
                                        display: false,
                                        grid: {
                                          display: false,
                                        },
                                        ticks: {
                                          display: false,
                                        },
                                      },
                                    },
                                    elements: {
                                      line: {
                                        borderWidth: 1,
                                        tension: 0.4,
                                      },
                                      point: {
                                        radius: 4,
                                        hitRadius: 10,
                                        hoverRadius: 4,
                                      },
                                    },
                                  }}
                                />
                              }
                              />
                          </CCol>
                          <CCol sm={6} lg={3}>
                              <CWidgetStatsA 
                              className='mb-4 !tw-bg-gray-600 !tw-text-white' 
                              
                              value={ 
                                  <>
                                      100{ ' '}
                                        <span className='fs-6 fw-normal'>
                                             (+10.5% <CIcon icon={cilArrowTop}/>)
                                        </span>
                                  </>
                               }
                               action={
                                <CDropdown alignment="end">
                                  <CDropdownToggle color="transparent" caret={false} className="p-0">
                                    <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                                  </CDropdownToggle>
                                  <CDropdownMenu>
                                    <CDropdownItem>Add new Recipe</CDropdownItem>
                                    <CDropdownItem>View All Recipes</CDropdownItem>
                                    <CDropdownItem>View Deleted Recipes</CDropdownItem>
                                  </CDropdownMenu>
                                </CDropdown>
                              }
                              title='My Recipes'
                              chart={
                                <CChartLine
                                  className="mt-3 mx-3"
                                  style={{ height: '70px' }}
                                  data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                      {
                                        label: 'Number of Recipes',
                                        backgroundColor: 'transparent',
                                        borderColor: 'rgba(255,255,255,.55)',
                                        pointBackgroundColor: getStyle('--cui-primary'),
                                        data: [20, 25, 30, 45, 50, 55, 80],
                                      },
                                    ],
                                  }}
                                  options={{
                                    plugins: {
                                      legend: {
                                        display: false,
                                      },
                                    },
                                    maintainAspectRatio: false,
                                    scales: {
                                      x: {
                                        grid: {
                                          display: false,
                                          drawBorder: false,
                                        },
                                        ticks: {
                                          display: false,
                                        },
                                      },
                                      y: {
                                        min: 10,
                                        max: 100,
                                        display: false,
                                        grid: {
                                          display: false,
                                        },
                                        ticks: {
                                          display: false,
                                        },
                                      },
                                    },
                                    elements: {
                                      line: {
                                        borderWidth: 1,
                                        tension: 0.4,
                                      },
                                      point: {
                                        radius: 4,
                                        hitRadius: 10,
                                        hoverRadius: 4,
                                      },
                                    },
                                  }}
                                />
                              }
                              />
                          </CCol>
                          <CCol sm={6} lg={3}>
                              <CWidgetStatsA 
                              className='mb-4 !tw-bg-gray-700 !tw-text-white' 
                              value={ 
                                  <>
                                      100{ ' '}
                                        <span className='fs-6 fw-normal'>
                                             (+10.5% <CIcon icon={cilArrowTop}/>)
                                        </span>
                                  </>
                               }
                               action={
                                <CDropdown alignment="end">
                                  <CDropdownToggle color="transparent" caret={false} className="p-0">
                                    <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                                  </CDropdownToggle>
                                  <CDropdownMenu>
                                    <CDropdownItem>Add new Recipe</CDropdownItem>
                                    <CDropdownItem>View All Recipes</CDropdownItem>
                                    <CDropdownItem>View Deleted Recipes</CDropdownItem>
                                  </CDropdownMenu>
                                </CDropdown>
                              }
                              title='My Recipes'
                              chart={
                                <CChartLine
                                  className="mt-3 mx-3"
                                  style={{ height: '70px' }}
                                  data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                      {
                                        label: 'Number of Recipes',
                                        backgroundColor: 'transparent',
                                        borderColor: 'rgba(255,255,255,.55)',
                                        pointBackgroundColor: getStyle('--cui-primary'),
                                        data: [20, 25, 30, 45, 50, 55, 80],
                                      },
                                    ],
                                  }}
                                  options={{
                                    plugins: {
                                      legend: {
                                        display: false,
                                      },
                                    },
                                    maintainAspectRatio: false,
                                    scales: {
                                      x: {
                                        grid: {
                                          display: false,
                                          drawBorder: false,
                                        },
                                        ticks: {
                                          display: false,
                                        },
                                      },
                                      y: {
                                        min: 10,
                                        max: 100,
                                        display: false,
                                        grid: {
                                          display: false,
                                        },
                                        ticks: {
                                          display: false,
                                        },
                                      },
                                    },
                                    elements: {
                                      line: {
                                        borderWidth: 1,
                                        tension: 0.4,
                                      },
                                      point: {
                                        radius: 4,
                                        hitRadius: 10,
                                        hoverRadius: 4,
                                      },
                                    },
                                  }}
                                />
                              }
                              />
                          </CCol>
                          <CCol sm={6} lg={3}>
                              <CWidgetStatsA 
                              className='mb-4 !tw-bg-gray-700 !tw-text-white' 
                              value={ 
                                  <>
                                      100{ ' '}
                                        <span className='fs-6 fw-normal'>
                                             (+10.5% <CIcon icon={cilArrowTop}/>)
                                        </span>
                                  </>
                               }
                               action={
                                <CDropdown alignment="end">
                                  <CDropdownToggle color="transparent" caret={false} className="p-0">
                                    <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                                  </CDropdownToggle>
                                  <CDropdownMenu>
                                    <CDropdownItem>Add new Recipe</CDropdownItem>
                                    <CDropdownItem>View All Recipes</CDropdownItem>
                                    <CDropdownItem>View Deleted Recipes</CDropdownItem>
                                  </CDropdownMenu>
                                </CDropdown>
                              }
                              title='My Recipes'
                              chart={
                                <CChartLine
                                  className="mt-3 mx-3"
                                  style={{ height: '70px' }}
                                  data={{
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                      {
                                        label: 'Number of Recipes',
                                        backgroundColor: 'transparent',
                                        borderColor: 'rgba(255,255,255,.55)',
                                        pointBackgroundColor: getStyle('--cui-primary'),
                                        data: [20, 25, 30, 45, 50, 55, 80],
                                      },
                                    ],
                                  }}
                                  options={{
                                    plugins: {
                                      legend: {
                                        display: false,
                                      },
                                    },
                                    maintainAspectRatio: false,
                                    scales: {
                                      x: {
                                        grid: {
                                          display: false,
                                          drawBorder: false,
                                        },
                                        ticks: {
                                          display: false,
                                        },
                                      },
                                      y: {
                                        min: 10,
                                        max: 100,
                                        display: false,
                                        grid: {
                                          display: false,
                                        },
                                        ticks: {
                                          display: false,
                                        },
                                      },
                                    },
                                    elements: {
                                      line: {
                                        borderWidth: 1,
                                        tension: 0.4,
                                      },
                                      point: {
                                        radius: 4,
                                        hitRadius: 10,
                                        hoverRadius: 4,
                                      },
                                    },
                                  }}
                                />
                              }
                              />
                          </CCol>
                     </CRow>
                     <CCard className='mb4 !tw-bg-gray-800 !tw-text-white'>
                          <CCardBody>
                              <CRow>
                                  <CCol sm={5}>
                                       <h4 id="request" className="card-title mb-0">
                                             User Orders
                                       </h4>
                                       <div className="small-text  tw-text-gray-300">January - December</div>
                                  </CCol>
                                  <CCol sm={7} className="d-none d-md-block">
                                        <CButton color="primary" className="float-end">
                                             <CloudDownloadIcon/>
                                        </CButton>
                                        <CButtonGroup className="float-end me-3">
                                            {
                                            ['Day', 'Month', 'Year'].map((value) => (
                                                    <CButton color="outline-secondary" key={value} className="mx-0" active={value === 'Month'}>
                                                        {value}
                                                    </CButton>
                                            ))
                                            }
                                        </CButtonGroup>
                                  </CCol>
                              </CRow>
                              <CChartLine
                                className='tw-text-white'
                                style={{ height: '300px', marginTop: '40px' }}
                                data={{
                                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                  datasets: [
                                    {
                                      label: 'My First dataset',
                                      backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                                      borderColor: getStyle('--cui-info'),
                                      pointHoverBackgroundColor: getStyle('--cui-info'),
                                      borderWidth: 2,
                                      data: [
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                      ],
                                      fill: true,
                                    },
                                    {
                                      label: 'My Second dataset',
                                      backgroundColor: 'transparent',
                                      borderColor: getStyle('--cui-success'),
                                      pointHoverBackgroundColor: getStyle('--cui-success'),
                                      borderWidth: 2,
                                      data: [
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                        random(50, 200),
                                      ],
                                    },
                                    {
                                      label: 'My Third dataset',
                                      backgroundColor: 'transparent',
                                      borderColor: getStyle('--cui-primary'),
                                      pointHoverBackgroundColor: getStyle('--cui-primary'),
                                      borderWidth: 1,
                                      borderDash: [8, 5],
                                      data: [65, 65, 65, 65, 65, 65, 65],
                                    },
                                  ],
                                }}
                                options={{
                                  maintainAspectRatio: false,
                                  plugins: {
                                    legend: {
                                      display: false,
                                    },
                                  },
                                  scales: {
                                    x: {
                                      grid: {
                                        drawOnChartArea: false,
                                      },
                                    },
                                    y: {
                                      ticks: {
                                        beginAtZero: true,
                                        maxTicksLimit: 5,
                                        stepSize: Math.ceil(250 / 5),
                                        max: 250,
                                      },
                                    },
                                  },
                                  elements: {
                                    line: {
                                      tension: 0.4,
                                    },
                                    point: {
                                      radius: 0,
                                      hitRadius: 10,
                                      hoverRadius: 4,
                                      hoverBorderWidth: 3,
                                    },
                                  },
                                }}
                              />
                          </CCardBody>
                     </CCard>
                </div>
                </CContainer>
            <AppFooter className='border-top-0'/>
        </div>
    </div>
  
  )
}
