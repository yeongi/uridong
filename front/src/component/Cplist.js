const CpList = (props) => {
  return (
    <>
      <p>
        쿠폰 이름 :{props.coupon_name} 발급 날짜: {props.print_attime} 만료
        날짜: {props.end_attime}
      </p>
    </>
  );
};

export default CpList;
