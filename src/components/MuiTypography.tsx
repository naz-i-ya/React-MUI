import { Typography } from '@mui/material' 

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>SubTitle1</Typography>
        <Typography variant='subtitle2'>SubTitle2</Typography>

        <Typography variant='body1'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, nam. Vitae quibusdam explicabo exercitationem veniam, distinctio corrupti velit facilis, vel voluptas odio, expedita nemo ex iste perspiciatis odit. Fugit, libero.
        </Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error deserunt, laborum cumque beatae quis modi praesentium eos culpa unde neque sint, enim repellendus sit impedit quia quidem est esse incidunt.</Typography>
    </div>
  )
}

export default MuiTypography