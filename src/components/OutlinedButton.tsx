import React from 'react';
import {ButtonProps} from '../../types';
import {Button} from '@/components/ui/button';

const OutlinedButton = ({children, onClick}: ButtonProps) => {
  return (
  <Button 
  onClick = {onClick} 
  className='px-6 py-2 font-medium bg-[#EDE5D8] rounded-sm text-[#F65B36] border-2 border-[#F65B36] w-fit transition-all  shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'
  >
    {children}
  </Button>
  )
}

export default OutlinedButton;