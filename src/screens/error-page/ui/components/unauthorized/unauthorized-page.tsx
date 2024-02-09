import { Flex, Result } from 'antd';

export const UnauthorizedPage = () => {
  return (
    <Flex className="full-screen" vertical align="center" justify="center">
      <Result
        status="error"
        title="401"
        subTitle="Ошибка авторизации"
        // // extra={
        //   // <Link to={getRouteAuth()}>
        //   //   <Button type="primary">Войти в аккаунт</Button>
        //   // </Link>
        // {/*}*/}
      />
    </Flex>
  );
};
export default UnauthorizedPage;
