'use client';

import { createContext, useContext } from "react";

import * as classnames from "classnames";

class MetaDefinition {
  /** @type {number} */ allocationId;
  /** @type {number} */ publisherId;
}

class ConsumerDefinition {
  /** @type {string} */ firstName;
  /** @type {string} */ lastName;
}

class SessionContextDefinition {
  meta = new MetaDefinition;
  consumer = new ConsumerDefinition;
}

const SessionContext = createContext(new SessionContextDefinition)

export default function SessionBlock({ className, session, children, ...props }) {
  className = classnames("root-content", className)

  return <SessionContext.Provider value={session}>
    <div className={className} {...props}>
      {children}
    </div>
  </SessionContext.Provider>
}

export const useSessionContext = () => useContext(SessionContext)
