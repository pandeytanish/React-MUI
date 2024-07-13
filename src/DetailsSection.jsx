import {
    Box,
    CardContent,
    Typography,
    Card,
    IconButton,
    Select,
    MenuItem,
    TextField,
    Button,
  } from "@mui/material";
  import React from "react";

  
  function DetailsSection() {
    return (
      <Box
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          marginTop: "12px",
        }}
      >
        <Box
          style={{
            padding: "40px",
            boxShadow: "0px 8px 32px 0px #0000000F",
            borderRadius: "24px",
            width: "895px",
            height: "1304px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginTop: "100px",
            // marginLeft: "120px",
            // marginBottom: "100px",
          }}
        >
          <Card style={{ width: "100%", boxShadow: "none" }}>
            <CardContent
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <Box style={{ height: "70px" }}>
                <Typography variant="h6" color="black" fontWeight="bold">
                  Medical Debt Package
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "center",
                    position: "relative",
                    top: "10px",
                  }}
                >
                  <Typography
                    style={{
                      backgroundColor: "#D1FAE5",
                      color: "#059669",
                      borderRadius: "40px",
                      padding: "5px 10px",
                      fontWeight: "700",
                      fontSize: "12px",
                    }}
                  >
                    ACTIVE COLLECTION
                  </Typography>
                  <Typography
                    style={{ fontSize: "14px", fontWeight: "500", color: "#64748B" }}
                  >
                    Posted 54 minutes ago
                  </Typography>
                </Box>
              </Box>
  
              <Box
                style={{
                  height: "98px",
                  borderTop: "1px solid #E2E8F0",
                  gap: "72px",
                  display: "flex",
                }}
              >
                <Box
                  style={{
                    height: "58px",
                    width: "141px",
                    display: "flex",
                    gap: "12px",
                    marginTop: "40px",
                  }}
                >
                  <img
                    style={{ height: "28px", width: "28px" }}
                    // src={dollericon}
                    alt="icon"
                  />
                  <Box>
                    <Typography
                      style={{
                        color: "#0F172A",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      $2,500
                    </Typography>
                    <Typography
                      style={{
                        color: "#334155",
                        fontWeight: "400",
                        fontSize: "16px",
                        marginTop: "8px",
                      }}
                    >
                      Portfolio Size
                    </Typography>
                  </Box>
                </Box>
  
                <Box
                  style={{
                    height: "58px",
                    width: "153px",
                    display: "flex",
                    gap: "12px",
                    marginTop: "40px",
                  }}
                >
                  <img
                    style={{ height: "28px", width: "28px" }}
                    // src={humen}
                    alt="icon"
                  />
                  <Box>
                    <Typography
                      style={{
                        color: "#0F172A",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      1
                    </Typography>
                    <Typography
                      style={{
                        color: "#334155",
                        fontWeight: "400",
                        fontSize: "16px",
                        marginTop: "8px",
                      }}
                    >
                      Account Count
                    </Typography>
                  </Box>
                </Box>
  
                <Box
                  style={{
                    height: "58px",
                    display: "flex",
                    gap: "12px",
                    marginTop: "40px",
                  }}
                >
                  <img
                    style={{ height: "28px", width: "28px" }}
                    // src={disk}
                    alt="icon"
                  />
                  <Box>
                    <Typography
                      style={{
                        color: "#0F172A",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      $500
                    </Typography>
                    <Typography
                      style={{
                        color: "#334155",
                        fontWeight: "400",
                        fontSize: "16px",
                        marginTop: "8px",
                      }}
                    >
                      Average Balance per Account
                    </Typography>
                  </Box>
                </Box>
              </Box>
  
              <Box
                style={{
                  height: "98px",
                  borderTop: "1px solid #E2E8F0",
                  gap: "72px",
                  display: "flex",
                }}
              >
                <Box style={{ height: "58px", width: "100px", marginTop: "38px" }}>
                  <Typography
                    style={{ fontSize: "18px", fontWeight: "600", color: "#0F172A" }}
                  >
                    Credit Card
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#334155",
                      marginTop: "8px",
                    }}
                  >
                    Type of Debt
                  </Typography>
                </Box>
  
                <Box style={{ height: "58px", width: "100px", marginTop: "38px" }}>
                  <Typography
                    style={{ fontSize: "18px", fontWeight: "600", color: "#0F172A" }}
                  >
                    1 years
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#334155",
                      marginTop: "8px",
                    }}
                  >
                    Age of Debt
                  </Typography>
                </Box>
              </Box>
  
              <Box
                style={{
                  height: "248px",
                  borderTop: "1px solid #E2E8F0",
                  gap: "24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    marginTop: "36px",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#0F172A",
                  }}
                >
                  Detailed Information
                </Typography>
                <Box style={{ display: "flex", gap: "72px" }}>
                  <Box
                    style={{
                      height: "156px",
                      width: "285px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "#334155",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Total Number of debts:{" "}
                      <span style={{ fontWeight: "400" }}>1</span>
                    </Typography>
  
                    <Typography
                      style={{
                        color: "#334155",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Total Amount of debts:{" "}
                      <span style={{ fontWeight: "400" }}>$2,500</span>
                    </Typography>
  
                    <Typography
                      style={{
                        color: "#334155",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Total Judgements:{" "}
                      <span style={{ fontWeight: "400" }}>0</span>
                    </Typography>
  
                    <Typography
                      style={{
                        color: "#334155",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Total month as customer:{" "}
                      <span style={{ fontWeight: "400" }}>3</span>
                    </Typography>
                  </Box>
  
                  <Box
                    style={{
                      height: "156px",
                      width: "285px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "#334155",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Past payment made:{" "}
                      <span style={{ fontWeight: "400" }}>Yes</span>
                    </Typography>
  
                    <Typography
                      style={{
                        color: "#334155",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Month average pay time:{" "}
                      <span style={{ fontWeight: "400" }}>1</span>
                    </Typography>
  
                    <Typography
                      style={{
                        color: "#334155",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Last collector contact:{" "}
                      <span style={{ fontWeight: "400" }}>01.02.2024</span>
                    </Typography>
  
                    <Typography
                      style={{
                        color: "#334155",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Last creditor contact:{" "}
                      <span style={{ fontWeight: "400" }}>01.02.2024</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
  
              <Box
                style={{
                  height: "156px",
                  borderTop: "1px solid #E2E8F0",
                  gap: "24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    marginTop: "36px",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#0F172A",
                  }}
                >
                  Supporting Documentation
                </Typography>
  
                <Box style={{ display: "flex", gap: "24px" }}>
                  <Box
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 4px 8px 8px",
                        gap: "16px",
                      }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#DBEAFE",
                          display: "flex",
                          gap: "10px",
                          padding: "16px",
                          borderRadius: "8px",
                        }}
                      >
                        {/* <DescriptionIcon /> */}
                      </Box>
                      <Box style={{ flex: "1 0 auto", marginLeft: "4px" }}>
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#0F172A",
                          }}
                        >
                          File name.doc{" "}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#64748B",
                          }}
                        >
                          128KB
                        </Typography>
                      </Box>
                      <IconButton>{/* <MoreVertIcon /> */}</IconButton>
                    </Card>
                  </Box>
                  <Box
                    style={{ width: "50%", flexDirection: "column", gap: "4px" }}
                  >
                    <Card
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 4px 8px 8px",
                        gap: "16px",
                      }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#DBEAFE",
                          display: "flex",
                          gap: "10px",
                          padding: "16px",
                          borderRadius: "8px",
                        }}
                      >
                        {/* <DescriptionIcon /> */}
                      </Box>
                      <Box style={{ flex: "1 0 auto", marginLeft: "4px" }}>
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#0F172A",
                          }}
                        >
                          File name.doc{" "}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#64748B",
                          }}
                        >
                          128KB
                        </Typography>
                      </Box>
                      <IconButton>{/* <MoreVertIcon /> */}</IconButton>
                    </Card>
                  </Box>
                </Box>
              </Box>
  
              <Box
                style={{
                  height: "156px",
                  borderTop: "1px solid #E2E8F0",
                  gap: "24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    marginTop: "36px",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#0F172A",
                  }}
                >
                  Other documents
                </Typography>
  
                <Box style={{ display: "flex", gap: "24px" }}>
                  <Box
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 4px 8px 8px",
                        gap: "16px",
                      }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#DBEAFE",
                          display: "flex",
                          gap: "10px",
                          padding: "16px",
                          borderRadius: "8px",
                        }}
                      >
                        {/* <DescriptionIcon /> */}
                      </Box>
                      <Box style={{ flex: "1 0 auto", marginLeft: "4px" }}>
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#0F172A",
                          }}
                        >
                          File name.doc{" "}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#64748B",
                          }}
                        >
                          128KB
                        </Typography>
                      </Box>
                      <IconButton>{/* <MoreVertIcon /> */}</IconButton>
                    </Card>
                  </Box>
                  <Box
                    style={{ width: "50%", flexDirection: "column", gap: "4px" }}
                  >
                    <Card
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 4px 8px 8px",
                        gap: "16px",
                      }}
                    >
                      <Box
                        style={{
                          backgroundColor: "#DBEAFE",
                          display: "flex",
                          gap: "10px",
                          padding: "16px",
                          borderRadius: "8px",
                        }}
                      >
                        {/* <DescriptionIcon /> */}
                      </Box>
                      <Box style={{ flex: "1 0 auto", marginLeft: "4px" }}>
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#0F172A",
                          }}
                        >
                          File name.doc{" "}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#64748B",
                          }}
                        >
                          128KB
                        </Typography>
                      </Box>
                      <IconButton>{/* <MoreVertIcon /> */}</IconButton>
                    </Card>
                  </Box>
                </Box>
              </Box>
  
              <Box
                style={{
                  height: "254px",
                  borderTop: "1px solid #E2E8F0",
                  gap: "24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    marginTop: "36px",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#0F172A",
                  }}
                >
                  Debt Owner Information
                </Typography>
                <Box
                  style={{
                    height: "162px",
                  }}
                >
                  <Box style={{
                  gap: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <Box
                    style={{
                      height: "80px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        height: "80px",
                        width: "80px",
                        objectFit: "cover",
                        background: "#D9D9D9",
                        borderRadius: "50%",
                      }}
                      src=""
                      alt="owner"
                    />
                    <Box style={{ height: "56px" }}>
                      <Typography
                        style={{
                          color: "#0F172A",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        James Carter
                      </Typography>
                      <Typography
                        style={{
                          color: "#334155",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        james.carter@example.com
                      </Typography>
                    </Box>
                  </Box>
  
                  <Box
                    style={{
                      height: "58px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      justifyContent:"space-between"
                    }}
                  >
                    <Box style={{height:"58px" ,display:"flex",flexDirection:"column",gap:'8px'}}>
                      <Typography style={{color:"#0F172A",fontSize:"18px",fontWeight:"600"}}>(567) 890-1234</Typography>
                      <Typography style={{color:"#334155",fontSize:"16px",fontWeight:"400"}}>Phone Number</Typography>
                    </Box>
  
                    <Box style={{height:"58px" ,display:"flex",flexDirection:"column",gap:'8px'}}>
                      <Typography style={{color:"#0F172A",fontSize:"18px",fontWeight:"600"}}>United States</Typography>
                      <Typography style={{color:"#334155",fontSize:"16px",fontWeight:"400"}}>Country</Typography>
                    </Box>
  
                    <Box style={{height:"58px" ,display:"flex",flexDirection:"column",gap:'8px'}}>
                      <Typography style={{color:"#0F172A",fontSize:"18px",fontWeight:"600"}}>Florida</Typography>
                      <Typography style={{color:"#334155",fontSize:"16px",fontWeight:"400"}}>State</Typography>
                    </Box>
  
                    <Box style={{height:"58px" ,display:"flex",flexDirection:"column",gap:'8px'}}>
                      <Typography style={{color:"#0F172A",fontSize:"18px",fontWeight:"600"}}>Miami</Typography>
                      <Typography style={{color:"#334155",fontSize:"16px",fontWeight:"400"}}>City</Typography>
                    </Box>
  
                    <Box style={{height:"58px" ,display:"flex",flexDirection:"column",gap:'8px'}}>
                      <Typography style={{color:"#0F172A",fontSize:"18px",fontWeight:"600"}}>33101</Typography>
                      <Typography style={{color:"#334155",fontSize:"16px",fontWeight:"400"}}>Zip</Typography>
                    </Box>
                    
                   
                  </Box>
                  </Box>
                </Box>
              </Box>
              
            </CardContent>
          </Card>
        </Box>
  
        <Box
            
            style={{ height: '631px', width: '285px', padding: '24px', borderRadius: '24px', display : 'flex', flexDirection : 'column', gap : '24px' ,boxShadow: '0px 8px 32px 0px #0000000F',marginTop: "100px", }}>
          <Typography variant="h6" style={{ fontSize : '20px' , fontWeight : '600' , color :'#334155' }}>
            Make Offer
          </Typography>
          <Box style={{display : 'flex', flexDirection : 'column', gap : '4px'}}>
          <Typography  style={{ fontSize : '14px', fontWeight :'700' , color :'#334155'  }}>
            Offer Type
          </Typography>
          <Select
            defaultValue=""
            fullWidth
            style={{  fontSize : '16px' , fontWeight : '400' , color : '#94A3B8' }}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select offer type
            </MenuItem>
            <MenuItem value="" disabled>
              Select offer type 
            </MenuItem>
  
          </Select>
          </Box>
          <Box style={{display : 'flex', flexDirection : 'column', gap : '4px'}}>
          <Typography style={{ fontSize : '14px', fontWeight :'700' , color :'#334155'  }}>
            Enter purchase amount
          </Typography>
          <TextField fullWidth type="number"
            InputProps={{
              startAdornment: <Box component="span" style={{ marginRight: '8px' , fontSize : '16px' , fontWeight : '700' , color :'#64748B' }}>$</Box>,
            }}
            defaultValue="0.00"
            style={{ fontSize : '16px' , fontWeight : '400' , color : '#94A3B8' }}
          />
          </Box>
          <TextField  fullWidth multiline placeholder='Optionally, add an appeal to the owner of the debt, explaining why you are the best firm to handle this deb' minRows={11} variant="outlined" style={{  borderRadius : '8px' , border : '1px solid #CBD5E1' , marginBottom : '-8px'}}
            inputProps={{
              style: { 
                fontSize: '16px',
                fontWeight : '400' ,
                 color : '#94A3B8',
                 wordSpacing : '6px'
              },
            }} />
          <Button variant="contained" fullWidth style={{ fontSize : '16px', fontWeight : '700', backgroundColor: '#1E3A8A', color: 'white' , padding :'10px 16px 10px 16px' , borderRadius : '8px' ,textTransform: 'none' }}>
            Make Offer
          </Button>
        </Box>
        </Box>
    );
  }
  
  
  export default DetailsSection;