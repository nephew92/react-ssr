import ButtonBlock from "@/client/blocks/bootstrap/Button";
import ColBlock from "@/client/blocks/bootstrap/Col";
import ContainerBlock from "@/client/blocks/bootstrap/Container";
import FormGroupBlock from "@/client/blocks/bootstrap/FormGroup";
import RowBlock from "@/client/blocks/bootstrap/Row";
import Title1Block from "@/client/blocks/content/Title1";
import LinkBlock from "@/client/blocks/router/Link";
import RouterBlock from "@/client/components/RouteBlock";

import FormBlockServer from "./modules/Form";
import SessionBlockServer from "./modules/Session";

export default async function ServerApp({ blocks }) {
  return <>
    <SessionBlockServer>
      <ContainerBlock fluid>
        <RowBlock className="justify-content-center">
          <ColBlock xs='auto' className='py-5 mb-5'>
            <Title1Block className='text-primary' title='ConsumerTestConect' />
          </ColBlock>
        </RowBlock>
        <RowBlock className="justify-content-center">
          <ColBlock responsive={6}>
            <RouterBlock>
              {[{
                path: "/register",
                element: <>
                  <RowBlock className="justify-content-center">
                    <ColBlock xs='auto'>
                      <Title1Block className='text-primary' title='Registration Form' />
                    </ColBlock>
                  </RowBlock>
                  <RowBlock>
                    <ColBlock>
                      <FormBlockServer />
                    </ColBlock>
                  </RowBlock>
                </>,
              }, {
                path: "/flow",
                element: <>
                  <RowBlock className="justify-content-center">
                    <ColBlock xs='auto'>
                      <Title1Block className='text-primary' title='Midpath Flow' />
                    </ColBlock>
                  </RowBlock>
                  <RowBlock>
                    <ColBlock>
                      <RowBlock className="justify-content-center">
                        <ColBlock xs='6'>
                          <FormGroupBlock>
                            <LinkBlock to='/register' className='btn d-block w-100 btn-outline-primary'>
                              Back to Form
                            </LinkBlock>
                          </FormGroupBlock>
                        </ColBlock>
                        <ColBlock xs='6'>
                          <FormGroupBlock>
                            <ButtonBlock block color="primary">
                              Continue
                            </ButtonBlock>
                          </FormGroupBlock>
                        </ColBlock>
                      </RowBlock>
                    </ColBlock>
                  </RowBlock>
                </>,
              }]}
            </RouterBlock>
          </ColBlock>
        </RowBlock>
      </ContainerBlock>
    </SessionBlockServer>
  </>
}
