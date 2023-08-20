import { Suspense } from "react";

import ColBlock from "@/client/blocks/bootstrap/Col";
import ContainerBlock from "@/client/blocks/bootstrap/Container";
import RowBlock from "@/client/blocks/bootstrap/Row";
import Title1Block from "@/client/blocks/content/Title1";
import FormProviderBlock from "@/client/blocks/form/Form";
import RootBlock from "@/client/blocks/modules/Root";
import RouterBlock from "@/client/components/RouteBlock";

import FormBlockServer from "./FormBlock";

export default async function ServerApp({ blocks }) {
  return <RootBlock>
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
                    <FormProviderBlock>
                      <Suspense fallback={'carregando'}>
                        <FormBlockServer />
                      </Suspense>
                    </FormProviderBlock>
                  </ColBlock>
                </RowBlock>
              </>,
            }]}
          </RouterBlock>
        </ColBlock>
      </RowBlock>
    </ContainerBlock>
  </RootBlock>
}
