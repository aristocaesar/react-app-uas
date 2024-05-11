import { Container, Section } from "../../components/molecules";
import { Template } from "../../components/organisms";
import { useFetcherData } from "../../hooks";

export default function About() {
  const { data, dataLoading } = useFetcherData("pages?slug=about");

  return (
    <Template title="Tentang">
      <Section id="headline" isTop={true}>
        <Container className="text-white-950">
          <h1 className="text-4xl font-bold mb-8 leading-[1.2]">
            Tentang Kami
          </h1>
          {dataLoading ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Sedang Memuat Ragam Kuliner ...
            </p>
          ) : (
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: data[0].content.rendered,
              }}
            ></div>
          )}
        </Container>
      </Section>
    </Template>
  );
}
