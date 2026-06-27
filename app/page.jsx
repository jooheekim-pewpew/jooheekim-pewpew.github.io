"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase-client";

const asset = (name) => `/assets/${name}`;

const links = {
  kakao: "https://pf.kakao.com/",
  map: "https://map.naver.com/",
  email: "mailto:contact@kmconsulting.co.kr",
  instagram: "https://www.instagram.com/",
  blog: "https://blog.naver.com/",
};

const services = [
  {
    image: asset("km-service-growth.svg"),
    name: "정부지원사업 및 정책자금 컨설팅",
    summary: "사업 단계와 업종에 맞는 지원사업을 선별하고 신청 전략을 설계합니다.",
    label: "지원사업 진단",
  },
  {
    image: asset("km-service-funding.svg"),
    name: "창업, 법인전환, 사업계획서 컨설팅",
    summary: "창업 초기 구조부터 법인전환, 투자/제안서 문서까지 함께 정리합니다.",
    label: "사업계획 고도화",
  },
  {
    image: asset("km-service-tax.svg"),
    name: "소상공인, 중소기업 경영관리",
    summary: "매출, 비용, 인력, 운영 데이터를 기반으로 실행 가능한 개선안을 제시합니다.",
    label: "경영개선 안내",
  },
];

const navItems = [
  { label: "서비스 소개", target: "service" },
  { label: "컨설팅 안내", target: "consulting" },
  { label: "회사 소개", target: "company" },
  { label: "상담문의", target: "contact" },
  { label: "오시는 길", target: "location" },
];

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="coupon">케이엠경영컨설팅 무료 사전 진단 상담 접수중</div>
      <header className="site-header">
        <div className="header-inner">
          <nav className="primary-nav" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <a href={`#${item.target}`} key={item.target}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="brand text-brand" href="#top" aria-label="케이엠경영컨설팅 홈">
            케이엠경영컨설팅
          </a>
          <div className="header-actions">
            <button type="button" aria-label="검색" onClick={() => setSearchOpen(true)}>
              <img src={asset("asset-01.png")} alt="" />
            </button>
            <a aria-label="이메일 문의" href={links.email}>
              <img src={asset("asset-02.png")} alt="" />
            </a>
            <a aria-label="상담문의" href="#contact">
              <img src={asset("asset-03.png")} alt="" />
              <span>상담</span>
            </a>
          </div>
        </div>
      </header>
      {searchOpen ? (
        <div className="search-panel" role="dialog" aria-label="검색">
          <button className="search-close" type="button" onClick={() => setSearchOpen(false)}>
            닫기
          </button>
          <label htmlFor="search-input">SEARCH</label>
          <input id="search-input" autoFocus placeholder="서비스, 정책자금, 창업 컨설팅 검색" />
        </div>
      ) : null}
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-label="케이엠경영컨설팅 메인">
      <img src={asset("km-hero.svg")} alt="경영컨설팅 회의와 사업 자료" />
      <div className="hero-copy">
        <h1>
          사업의 방향을 정리하고
          <br />
          성장 전략을 실행합니다
        </h1>
        <p>정책자금 · 창업 · 법인전환 · 경영개선 전문 컨설팅</p>
        <div className="hero-actions">
          <a href="#contact">상담 문의</a>
          <a href={links.kakao} target="_blank" rel="noreferrer">
            카카오톡 문의
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section className="products" id="service">
      <div className="section-heading">
        <h2>서비스 소개</h2>
        <p>첫 상담에서 사업 현황을 확인하고 필요한 지원 제도와 실행 자료를 정리합니다.</p>
      </div>
      <div className="product-grid">
        {services.map((service) => (
          <article className="product-card" key={service.name}>
            <div className="product-image">
              <span aria-label="주요 서비스">
                <img src={asset("asset-05.png")} alt="" />
              </span>
              <img src={service.image} alt={service.name} />
            </div>
            <h3>{service.name}</h3>
            <div className="price-row">
              <strong>{service.label}</strong>
              <span>상담 가능</span>
            </div>
            <em>{service.summary}</em>
          </article>
        ))}
      </div>
    </section>
  );
}

function Technique() {
  return (
    <section className="technique" id="consulting">
      <p className="ticker">
        Business&nbsp;&nbsp;Growth&nbsp;&nbsp;Funding&nbsp;&nbsp;Strategy&nbsp;&nbsp;Consulting
      </p>
      <div className="story-grid">
        <img src={asset("km-consulting-01.svg")} alt="컨설팅 절차 안내" />
        <img src={asset("km-consulting-02.svg")} alt="사업 자료 검토" />
        <div className="story-copy story-copy-top">
          <h2>컨설팅 안내</h2>
          <p>상담 접수 후 사업 현황을 진단하고, 필요한 제도와 실행 과제를 우선순위에 맞춰 안내합니다.</p>
          <a href="#contact">상담 시작</a>
        </div>
        <div className="story-copy">
          <h2>자료 안내</h2>
          <p>회사 소개 이미지, 서비스 안내 자료, 제안서 PDF, 홍보 이미지를 홈페이지와 문의 응대에 활용할 수 있도록 구성합니다.</p>
          <a href="#company">회사 소개</a>
        </div>
        <img src={asset("km-company.svg")} alt="회사 소개 이미지" />
        <img src={asset("km-location.svg")} alt="오시는 길 지도 이미지" />
      </div>
    </section>
  );
}

function BrandStatement() {
  return (
    <section className="statement" id="company">
      <div>
        <p>Find the right</p>
        <p>
          <span>growth</span> path for
        </p>
        <p>your business</p>
      </div>
      <img src={asset("asset-13.png")} alt="" />
    </section>
  );
}

function ContactSection() {
  const [submitState, setSubmitState] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!supabase) {
      setSubmitState("config-error");
      return;
    }

    const formData = new FormData(form);
    const inquiry = {
      customer_name: formData.get("customer_name"),
      phone: formData.get("phone"),
      business_type: formData.get("business_type"),
      inquiry_category: formData.get("inquiry_category"),
      message: formData.get("message"),
      status: "new",
    };

    setSubmitState("submitting");

    const { error } = await supabase.from("consultation_inquiries").insert(inquiry);

    if (error) {
      setSubmitState("error");
      return;
    }

    form.reset();
    setSubmitState("success");
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-copy">
        <h2>상담문의</h2>
        <p>아래 항목을 남겨주시면 상담 문의 데이터로 안전하게 접수됩니다. 확인 후 필요한 컨설팅 범위를 안내드립니다.</p>
        <div className="contact-links">
          <a href={links.kakao} target="_blank" rel="noreferrer">
            카카오톡 상담
          </a>
          <a href={links.email}>이메일 문의</a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            인스타그램
          </a>
          <a href={links.blog} target="_blank" rel="noreferrer">
            블로그
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="customer_name" aria-label="고객이름" placeholder="고객이름" required />
        <input name="phone" aria-label="고객 연락처" placeholder="고객 연락처" required />
        <select name="business_type" aria-label="사업자 유형" defaultValue="" required>
          <option value="" disabled>
            사업자 유형
          </option>
          <option>예비창업자</option>
          <option>개인사업자</option>
          <option>법인사업자</option>
          <option>소상공인/중소기업</option>
        </select>
        <select name="inquiry_category" aria-label="문의 분야" defaultValue="" required>
          <option value="" disabled>
            문의 분야
          </option>
          <option>정책자금</option>
          <option>창업 컨설팅</option>
          <option>법인전환</option>
          <option>경영개선</option>
          <option>제안서/사업계획서</option>
        </select>
        <textarea name="message" aria-label="상담 문의 내용" placeholder="상담 문의 내용" required />
        <button type="submit" disabled={submitState === "submitting"}>
          {submitState === "submitting" ? "접수 중..." : "상담 문의 보내기"}
        </button>
        {submitState === "success" ? (
          <p className="form-note" role="status">
            상담 문의가 접수되었습니다. 빠르게 확인 후 연락드리겠습니다.
          </p>
        ) : null}
        {submitState === "error" ? (
          <p className="form-note form-note-error" role="alert">
            접수 중 문제가 생겼습니다. 잠시 후 다시 시도하거나 이메일 문의를 이용해주세요.
          </p>
        ) : null}
        {submitState === "config-error" ? (
          <p className="form-note form-note-error" role="alert">
            Supabase 연결 설정이 필요합니다.
          </p>
        ) : null}
      </form>
    </section>
  );
}

function BrandBanner() {
  return (
    <section className="brand-banner" id="location">
      <img src={asset("km-location.svg")} alt="케이엠경영컨설팅 오시는 길" />
      <div>
        <h2>케이엠경영컨설팅</h2>
        <p>
          사업자의 현재 상황을 숫자와 제도로 함께 읽고,
          <br />
          상담부터 실행 자료까지 필요한 다음 단계를 선명하게 제안합니다.
        </p>
        <a href={links.map} target="_blank" rel="noreferrer">
          네이버 지도 보기
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo text-brand">케이엠경영컨설팅</div>
        <div className="footer-columns">
          <section>
            <h2>Info</h2>
            <p>상호 : 케이엠경영컨설팅&nbsp;&nbsp; 대표 : 케이엠&nbsp;&nbsp; 이메일 : contact@kmconsulting.co.kr</p>
            <p>주요 서비스 : 정책자금 컨설팅, 창업/법인전환, 사업계획서, 경영개선</p>
            <p>주소 : 서울특별시 강남구 테헤란로 000&nbsp;&nbsp; 개인정보보호책임자 : 케이엠경영컨설팅</p>
            <small>Copyright 2026. KM Management Consulting. All Rights Reserved.</small>
          </section>
          <section>
            <h2>Guide</h2>
            <a href="#service">서비스 소개</a>
            <a href="#consulting">컨설팅 안내</a>
            <a href="#location">오시는 길</a>
          </section>
          <section>
            <h2>Contact us</h2>
            <strong>카카오톡 상담 바로가기</strong>
            <p>
              평일 10:00 - 18:00
              <br />
              주말 및 공휴일 휴무
            </p>
            <p>이메일 문의는 24시간 접수 가능합니다.</p>
          </section>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="floating">
      <a href="#top" aria-label="맨 위로">
        <img src={asset("asset-15.png")} alt="" />
      </a>
      <a href="#contact" aria-label="상담문의">
        <img src={asset("asset-16.png")} alt="" />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductGrid />
      <Technique />
      <BrandStatement />
      <ContactSection />
      <BrandBanner />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
